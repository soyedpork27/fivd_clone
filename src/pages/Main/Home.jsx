import React from 'react';

// css
import '../../css/Home/home.css';
import { Link } from 'react-router-dom';

// icons
import { SiGooglemaps } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";


function Home(props) {
  return (
    <>
      <section>
        <h2 className='Home-title'>
          한 차원 높은 수준의
          <br />
          <span className="txt-main_col">퍼스널 트레이닝</span>을
          <br />
          경험해보세요
        </h2>

        <div className='Home-servLink_wrap'>
            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
              <p className='Home-link_title'>
                  내 주변 전문가
                </p>

                <p className='Home-link_txt'>
                  위치 기반 전문가 찾기
                </p>

                <SiGooglemaps className='Home-link-icon'/>

              </Link>
            </article>

            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
                <p className='Home-link_title'>
                  원 포인트 레슨
                </p>

                <p className='Home-link_txt'>
                  막히는 부분이 있다면?
                </p>

                <GiTeacher className='Home-link-icon'/>
              </Link>
            </article>


        </div>

      </section>


      {/* -- */}
      <section>
        <h2 className='Home-title'>
          한 차원 높은 수준의
          <br />
          <span className="txt-main_col">퍼스널 트레이닝</span>을
          <br />
          경험해보세요
        </h2>

        <div className='Home-servLink_wrap'>
            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
              <p className='Home-link_title'>
                  내 주변 전문가
                </p>

                <p className='Home-link_txt'>
                  위치 기반 전문가 찾기
                </p>

                <SiGooglemaps className='Home-link-icon'/>

              </Link>
            </article>

            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
                <p className='Home-link_title'>
                  원 포인트 레슨
                </p>

                <p className='Home-link_txt'>
                  막히는 부분이 있다면?
                </p>

                <GiTeacher className='Home-link-icon'/>
              </Link>
            </article>


        </div>

      </section><section>
        <h2 className='Home-title'>
          한 차원 높은 수준의
          <br />
          <span className="txt-main_col">퍼스널 트레이닝</span>을
          <br />
          경험해보세요
        </h2>

        <div className='Home-servLink_wrap'>
            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
              <p className='Home-link_title'>
                  내 주변 전문가
                </p>

                <p className='Home-link_txt'>
                  위치 기반 전문가 찾기
                </p>

                <SiGooglemaps className='Home-link-icon'/>

              </Link>
            </article>

            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
                <p className='Home-link_title'>
                  원 포인트 레슨
                </p>

                <p className='Home-link_txt'>
                  막히는 부분이 있다면?
                </p>

                <GiTeacher className='Home-link-icon'/>
              </Link>
            </article>


        </div>

      </section><section>
        <h2 className='Home-title'>
          한 차원 높은 수준의
          <br />
          <span className="txt-main_col">퍼스널 트레이닝</span>을
          <br />
          경험해보세요
        </h2>

        <div className='Home-servLink_wrap'>
            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
              <p className='Home-link_title'>
                  내 주변 전문가
                </p>

                <p className='Home-link_txt'>
                  위치 기반 전문가 찾기
                </p>

                <SiGooglemaps className='Home-link-icon'/>

              </Link>
            </article>

            <article className="Home-servLink_box">
              <Link to='/expert' className='Home-box_link'>
                <p className='Home-link_title'>
                  원 포인트 레슨
                </p>

                <p className='Home-link_txt'>
                  막히는 부분이 있다면?
                </p>

                <GiTeacher className='Home-link-icon'/>
              </Link>
            </article>


        </div>

      </section>






    </>
  );
}

export default Home;