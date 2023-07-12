import './LearnersSection.css'
import userdp1 from '../../assets/userdp1.png'
import userdp2 from '../../assets/userdp2.png'
import userdp3 from '../../assets/userdp3.png'
function Learners() {
    return (
        <>
            <div className='learners-container'>
                <div className='top'>
                    <h1>What Learners are saying.</h1>

                </div>
                <div className='testimony card'>

                    <div className='user-1'>
                        <img src={userdp1} alt="user1" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur, maxime minus? Fugiat temporibus dicta magnam tempore id! Dolores.</p>
                        <i>Adaora Eze</i>
                    </div>
                    <div className='user-1'>
                        <img src={userdp1} alt="user1 " />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur, maxime minus? Fugiat temporibus dicta magnam tempore id! Dolores.</p>
                        <i>Adaora Eze</i>
                    </div>
                    <div className='user-2'>
                        <img src={userdp2} alt="user2" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur, maxime minus? Fugiat temporibus dicta magnam tempore id! Dolores.</p>
                        <i>Segun Ayo</i>
                    </div>
                    <div className='user-3'>
                        <img src={userdp3} alt="user3" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas tenetur molestiae aliquid corporis. Nesciunt pariatur sint quia, atque deleniti temporibus nulla architecto eaque minima fugit, cumque est reiciendis praesentium tenetur, maxime minus? Fugiat temporibus dicta magnam tempore id! Dolores.</p>
                        <i>Abbah Abubakar</i>
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









