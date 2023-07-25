import './LearnersSection.css'
import userdp1 from '../../assets/userdp1.png'
import userdp2 from '../../assets/userdp2.png'
import userdp3 from '../../assets/userdp3.png'

function Learners() {
    return (
        <>
            <div className='learners-container'>
                <div className='top'>
                    <h1>What learners are saying.</h1>

                </div>
                <div className='testimony '>

                    <div className='card'>
                        <img src={userdp1} alt="user1" />
                        <p>"Lorem ipsum dolor sit ame consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur".</p>
                        <em>Adaora Eze</em>
                    </div>
                    <div className='card'>
                        <img src={userdp1} alt="user1 " />
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur".</p>
                        <em>Adaora Eze</em>
                    </div>
                    <div className='card'>
                        <img src={userdp2} alt="user2" />
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur".</p>
                        <em>Segun Ayo</em>
                    </div>
                    <div className='card'>
                        <img src={userdp3} alt="user3" />
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur".</p>
                        <em>Abbah Abubakar</em>
                    </div>

                </div>
                <div>
                    <button className='click-btn'>Click for more</button>
                </div>

            </div>
        </>
    )
}
export default Learners;









