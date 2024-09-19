import React from 'react';

function SlideSection(props) {
  return (
    <section className='Home-slide_section'>
        <h2>
          최근 전문가 글
          {/* 최근 작성된 포트폴리오 */}
        </h2>

        {/* 슬라이드 리스트 맵팡 */}
        <article >
          <h3>
            다이어트
          </h3>

          <p>
            전찬혁 전문가
          </p>


          <div className='B&F_wrap'>

            <div className='B&F_box'>
              <img src="" alt=""  />
              <span className='B&F_txt'>Before</span>
            </div>

            <div className='B&F_box'>
              <img src="" alt=""  />
              <span className='B&F_txt'>After</span>
            </div>

          </div>

          <p className='portfolio_text'>
            목적에 맞는 수업 기반으로 진행되고 있습니다 :)
            영상과 피드백 제공으로 소통 나누며 함께
            데이터를 쌓아두면서 목표 달성해 나가실
            수 있게 도와드리겠습니다🙇‍♂️
          </p>



        </article>



    </section>
  );
}

export default SlideSection;