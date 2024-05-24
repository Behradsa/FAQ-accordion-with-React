import starImage from "./assets/images/icon-star.svg";
import Question from "./Question";

function Faqs() {
  return (
    <div className="center">
      <div className="faqs-container">
        <div className="heading">
          <img className="star" src={starImage} alt="star" />
          <h1>FAQs</h1>
        </div>
        <Question
          q="What is Frontend Mentor, and how will it help me?"
          a="Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building."
        />{" "}
        <hr />
        <Question
          q="Is Frontend Mentor free?"
          a="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        />
        <hr />
        <Question
          q="Can I use Frontend Mentor projects in my portfolio?"
          a="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        />
        <hr />
        <Question
          q="How can I get help if I'm stuck on a challenge?"
          a="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members."
        />
      </div>
    </div>
  );
}

export default Faqs;
