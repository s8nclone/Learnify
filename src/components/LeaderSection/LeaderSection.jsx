
import './LeaderSection.css'
import userdp1 from '../../assets/userdp1.png'
import userdp2 from '../../assets/userdp2.png'
import userdp3 from '../../assets/userdp3.png'
import userdp4 from '../../assets/userdp4.png'


function LeaderSection(){

return(
  <>
    <div className="leaders-container">
        <div className="topp">
            <h1>Meet your leaders</h1>

        </div>
        <div className="leaders-card">

            <div className="cardd">
                <img src={userdp1} alt="user1" className="leader-img" />
                <p className="leader-name">Ike Chinwedu</p>
                <h2 className="leader-position">Founder</h2>
            </div>
            <div className="cardd">
                <img src={userdp2} alt="user2" className="leader-img"/>
                <p className="leader-name">Ike Chinwedu</p>
                <h2 className="leader-position">Co-founder</h2>
            </div>
            <div className="cardd">
                <img src={userdp1} alt="user1" className="leader-img" />
                <p className="leader-name">Ike Chinwedu</p>
                <h2 className="leader-position">CTO</h2>
            </div>
            <div className="cardd">
                <img src={userdp4} alt="user3" className="leader-img" />
                <p className="leader-name">Ike Chinwedu</p>
                <h2 className="leader-position">CEO</h2>
            </div>
            <div className="cardd">
                <img src={userdp3} alt="user4" className="leader-img" />
                <p className="leader-name">Ike Chinwedu</p>
                <h2 className="leader-position">MD</h2>
            </div>

        </div>
        
        <button className="click-btn">See more</button>

    </div>
</>



)

}
export default LeaderSection;