import React from 'react';
import { NavLink } from "react-router-dom"

const HomeSub = () => {
  return (
    <section className="home">
      {/* flexbox-item-home 높이를 가져오고 나서 home-detective-img 적용 */}
      <div className="flexbox-item-home home-detective-img" >
        {/* flexbox-item 서식을 가져오고 나서 home-text 적용 */}
        <div className="mobile-home">
          <div className="home-text">
            <div>안녕하세요</div>
            <div>늘 재미있고 싶은 최다솜입니다.</div>
            <div className="simplework">"<span>단순반복적인 일</span>을 해결해,</div>
            <div className="interesting"><span>흥미로운 일</span>로 가득 채우는 하루."</div>
            <div>를 꿈꾸고 있습니다.</div>
          </div>
          <NavLink className="mobile-home-img" to = "/portfolio">
           <div className="mobile-home-img-divide"></div>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default HomeSub;