
import "./Intro.css"
import twotree from "../../ima/twotree.png" 
export const Intro = () => {
  return (
    <div className="i">
         <div className="i-left">
            <div className="i-left-wrapper">
             <h2 className="i-intro">Hello My name is </h2>
             <h1 className="i-name"> Shagun Singh</h1>
           
             <p className="i-desc">
             I specialize in designing and developing services tailored to clients of all sizes, with a particular focus on leveraging my expertise in Data Structures and Algorithms (DSA). My unique skill set allows me to create solutions that are not only stylish and modern but also highly efficient and scalable.

With a deep understanding of DSA principles, I approach each project with a strategic mindset, ensuring that the underlying architecture is robust and optimized for performance. Whether it's crafting complex algorithms to solve intricate problems or implementing efficient data structures to manage and manipulate data, I am equipped to tackle the most demanding challenges.
             </p>
            </div>
            <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
         </div>
         <div className="i-right">
            <div className="i-b"></div>
            <img src={twotree} alt=""  className="i-ima"/>
         </div>
         </div>
  )
}
