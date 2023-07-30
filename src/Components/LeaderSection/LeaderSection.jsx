
import './LeaderSection.css'
import userdp1 from '../../assets/userdp1.png'
import userdp2 from '../../assets/userdp2.png'
import userdp3 from '../../assets/userdp3.png'


function LeaderSection(){

return(
  <>
  <div className='learners-con'>
      <div className='topp'>
          <h1>Meet Your Leaders</h1>

      </div>
      <div className='testimoni '>

          <div className='cardd'>
              <img src={userdp1} alt="user1" />
              <h2>Ike Chinwedu</h2>
              <h4>Founder</h4>
          </div>
          <div className='cardd'>
              <img src={userdp1} alt="user1 " />
              <h2>Ike Chinwedu</h2>
              <h4>Co-founder</h4>
          </div>
          <div className='cardd'>
              <img src={userdp2} alt="user2" />
              <h2>Ike Chinwedu</h2>
              <h4>CEO</h4>
          </div>
          <div className='cardd'>
              <img src={userdp3} alt="user3" />
              <h2>Ike Chinwedu</h2>
              <h4>MD</h4>
          </div>

      </div>
      <div>
         <h2 class='seee'> <a href="">See More</a></h2>
      </div>

  </div>
</>



)

}
export default LeaderSection;