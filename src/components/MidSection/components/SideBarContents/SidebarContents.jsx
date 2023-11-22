import React from 'react'
import './SidebarContents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SidebarContents = ({activeBar}) => {
  return (
    <div className="sidbarContents">
      <div className="card">
        <h1>{activeBar}</h1>
        <div className="toper">


          <div className="cardHeader">
            <div className="HeadContents">
              <h2>Subjec: </h2>
              <p>English Litrature</p>
            </div>
            <div className="HeadContents">
              <h2>Academic Level: </h2>
              <p>Undergraduate</p>
            </div>
            <div className="HeadContents">
              <h2>Word Count: </h2>
              <p>1200</p>
            </div>

          </div>
          <div className="HeadContents date">
            <h2>Date: </h2>
            <p>10th Oct 2023</p>
          </div>
          <div className="HeadContents desc">
            <h2 >Short Description: </h2>
            <p>Overview of the sample essay, providing a glimspy to the reader </p>
          </div>

          <div className="cardFooter">
            <div className="HeadContents">
              <h2>Rating: </h2>
              <p style={{marginTop:"-3px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="126" height="25" viewBox="0 0 126 25" fill="none" style={{marginLeft:"10px"}}>
                <path d="M5.70352 24.6202L7.75426 15.8334L0.935547 9.92594L9.91746 9.14864L13.4351 0.861328L16.9528 9.14698L25.9331 9.92428L19.116 15.8317L21.1668 24.6185L13.4351 19.9547L5.70352 24.6202Z" fill="#00A12D" />
                <path d="M30.5102 24.6202L32.5609 15.8334L25.7422 9.92594L34.7241 9.14864L38.2418 0.861328L41.7595 9.14698L50.7397 9.92428L43.9227 15.8317L45.9734 24.6185L38.2418 19.9547L30.5102 24.6202Z" fill="#00A12D" />
                <path d="M55.3188 24.6202L57.3695 15.8334L50.5508 9.92594L59.5327 9.14864L63.0504 0.861328L66.5681 9.14698L75.5483 9.92428L68.7313 15.8317L70.782 24.6185L63.0504 19.9547L55.3188 24.6202Z" fill="#00A12D" />
                <path d="M81.3761 22.8997L82.9814 16.0213L83.0949 15.5352L82.7176 15.2084L77.3766 10.5812L84.4106 9.97247L84.9062 9.92959L85.1005 9.47173L87.8571 2.97751L90.6135 9.47013L90.8079 9.92793L91.3034 9.97082L98.3361 10.5795L92.9964 15.2068L92.6192 15.5337L92.7326 16.0197L94.3381 22.8984L88.2841 19.2467L87.8569 18.989L87.4298 19.2467L81.3761 22.8997Z" fill="#00A12D" fill-opacity="0.01" stroke="#00A12D" stroke-width="1.65382" />
                <path d="M106.183 22.8997L107.788 16.0213L107.901 15.5352L107.524 15.2084L102.183 10.5812L109.217 9.97247L109.713 9.92959L109.907 9.47173L112.664 2.97751L115.42 9.47013L115.615 9.92793L116.11 9.97082L123.143 10.5795L117.803 15.2068L117.426 15.5337L117.539 16.0197L119.145 22.8984L113.091 19.2467L112.664 18.989L112.236 19.2467L106.183 22.8997Z" fill="#00A12D" fill-opacity="0.01" stroke="#00A12D" stroke-width="1.65382" />
              </svg>

              </p>
            </div>
            <div className="HeadContents">
              <h2>Author: </h2>
              <p>Jan Smith</p>
            </div>
            <div className="HeadContents">
              <h2>Citation: </h2>
              <p>MLa</p>
            </div>
            <div className="HeadContents footer">
              <h2>Type: </h2>
              <p>Desctiptive</p>
            </div>

          </div>
        </div>
        <div className="tags">
          <h3>Tags:</h3>
          <div className="btns">

            <button>Descriptive</button>
            <button>Research Paper</button>
          </div>
        </div>
      </div>
      <div class="vertical-line"></div>
      <div className="pdf">
        <img src="./images/pdf.png" alt="" />
      </div>
    </div>
  )
}

export default SidebarContents