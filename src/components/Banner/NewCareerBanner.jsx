import styled from 'styled-components';
import infoIcon from '../../assets/infoIcon.svg'
import closeBtn from '../../assets/closeBtn.svg'
import { useContext } from 'react';
import { AuthContext } from '../../hooks/context';


const AdContainer = styled.div`
    background: #F2C74D;
    display: flex;
    gap: 8rem;
    padding: 1rem 5rem;
    align-items: center;
    color: #000;
    font-size: 2rem;
    position: absolute;
    z-index: 10000;
    width: 100%;
`;

const InfoIcon = styled.img`
    cursor: pointer;
`;

const RemoveBtn = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
`;

function NewCareerBanner() {

    const { setVisible } = useContext(AuthContext)

    const removeElement = () => {
        setVisible(!true);
    };

  return (
    <AdContainer className="page-ad">
        <InfoIcon src={infoIcon} alt="info icon" />
        <p>Launch a new career in as little as 6 months</p>
        <RemoveBtn onClick={removeElement} className="close-btn"><img src={closeBtn} alt="close button" /></RemoveBtn>
    </AdContainer>
  )
}

export default NewCareerBanner
