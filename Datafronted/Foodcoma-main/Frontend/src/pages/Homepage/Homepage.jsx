// import React from "react";
// import DragDropImageUploader from "../../components/DragDropImageUploader/DragDropImageUploader.jsx";
// import DescriptionsContainer from "../../components/DescriptionsContainer/DescriptionsContainer.jsx";

// import "./homepage.css";
// const Homepage = () => {
//   return (
//     <div className="homePage">
//       <DescriptionsContainer />
//       <DragDropImageUploader />

//     </div>
//   );
// };

// export default Homepage;
// Homepage.jsx
import React from "react";
import DragDropImageUploader from "../../components/DragDropImageUploader/DragDropImageUploader.jsx";
import DescriptionsContainer from "../../components/DescriptionsContainer/DescriptionsContainer.jsx";
import "./homepage.css";
import backg from './backg.jpg'

const Homepage = () => {
  return (
    <div className="background" style={{backgroundImage: `url(${backg})`}}> {/* Apply the background styles */}
      <DescriptionsContainer />
      <DragDropImageUploader />
    </div>
  );
};

export default Homepage;
