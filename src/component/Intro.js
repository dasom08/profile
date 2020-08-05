import React from 'react';

const Intro = (props) => {
  return (
    <div className="flexbox-item-Iam intro-container">
      <div className="intro-left">
        <div className="cv">
          <div className="cv-title">#.Education</div>
          <div className="cv-contents"> 2019~2020 코드스테이츠 Pre course </div>
          <div className="cv-contents"> 2008~2013 _대학교 </div>
          <div className="cv-contents"> [중어중문학, 경제학 전공] </div>
          <div className="cv-contents"> 2005~2008 화수고등학교 </div>

          <div className="cv-blank"> 칸띄우기 </div>
          <div className="cv-blank"> 칸띄우기 </div>

          <div className="cv-title">#.Work experience</div>
          <div className="cv-contents"> 2017~2019 스낵 MD</div>
          <div className="cv-contents"> 2014~2016 온라인 가공식품 MD</div>

          <div className="cv-blank"> 칸띄우기 </div>
     
        </div>
        <div className="me-img"></div>
      </div>
      <div className="intro-right">
        <div className="cv-title">#.Skills - Tech Stacks</div>
        <div className="cv-contents"> application & data</div>
        <div className="stack-img"></div>
        <div className="cv-blank"> 칸띄우기 </div>
        <div className="cv-contents"> devOps</div>
        <div className="dev-img"></div>
        <div className="cv-blank"> 칸띄우기 </div>

      </div>
    </div>
  );

}
export default Intro;