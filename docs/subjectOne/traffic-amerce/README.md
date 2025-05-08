# 罚款相关

<div class="image-grid">
  <div class="image-item">
    <img src="./images/微信图片_20250507223231.jpg" alt="罚款相关图片1">
    <p>罚款相关图片1</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223335.jpg" alt="罚款相关图片2">
    <p>罚款相关图片2</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223359.jpg" alt="罚款相关图片3">
    <p>罚款相关图片3</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223420.jpg" alt="罚款相关图片4">
    <p>罚款相关图片4</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223545.jpg" alt="罚款相关图片5">
    <p>罚款相关图片5</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223618.jpg" alt="罚款相关图片6">
    <p>罚款相关图片6</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507223637.jpg" alt="罚款相关图片7">
    <p>罚款相关图片7</p>
  </div>
  

</div>
<!-- 总结 -->
<div class="summary-section">
  <h3>罚款总结</h3>
  <ul>
    <li>
      <strong>罚200-2000元 并吊销驾驶证:</strong>
      <ul>
        <li>超速50%</li>
        <li>借车给未取得驾驶证的人</li>
      </ul>
    </li>
    <li>
      <strong>罚1000-2000元 并吊销驾驶证，处10日以下拘留:</strong>
      <ul>
        <li>因饮酒后驾驶机动车被处罚，再次饮酒后驾驶机动车的</li>
      </ul>
    </li>
    <li>
      <strong>罚200元或以下:</strong>
      <ul>
        <li>机动车未按照规定检验</li>
        <li>改变车身属性未办理变更</li>
        <li>该离场不离场等轻微违规行为</li>
      </ul>
    </li>
  </ul>
</div>
<style>
.summary-section {
  margin: 20px auto; /* Center align and adjust margin */
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* Lighter background */
  max-width: 900px; /* Max width for larger screens */
}

.summary-section h3 {
  margin-top: 0;
  margin-bottom: 20px; /* Increased spacing */
  text-align: center;
  color: #2c3e50; /* Darker, more modern color */
  font-size: 1.5em; /* Larger heading */
}

.summary-section ul {
  list-style-type: none;
  padding-left: 0;
}

.summary-section li {
  margin-bottom: 12px; /* Slightly more spacing */
  line-height: 1.6; /* Improved readability */
}

.summary-section li strong {
  color: #34495e; /* Consistent strong text color */
}

.summary-section li ul {
  margin-top: 8px;
  padding-left: 25px;
  list-style-type: square; /* Changed bullet style */
}

.summary-section li ul li {
  margin-bottom: 6px;
  font-size: 0.95em; /* Slightly larger for better readability */
  color: #555;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Smaller min for more items on mobile */
  grid-gap: 15px; /* Reduced gap */
  margin: 20px 0;
  padding: 0 10px; /* Add some padding on mobile */
}

.image-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for shadow too */
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  background-color: #fff;
}

.image-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.image-item img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 250px; /* Limit image height */
  object-fit: cover; /* Ensure image covers the area */
  border-bottom: 1px solid #e0e0e0;
}

.image-item p {
  padding: 12px;
  margin: 0;
  text-align: center;
  background-color: #f9f9f9;
  font-size: 0.9em;
  color: #333;
  border-top: 1px solid #e0e0e0; /* Separator line */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .summary-section h3 {
    font-size: 1.3em;
  }
  .summary-section li ul li {
    font-size: 0.9em;
  }
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Even smaller for very small screens */
    grid-gap: 10px;
  }
  .image-item p {
    font-size: 0.85em;
  }
}

@media (max-width: 480px) {
  .summary-section {
    margin: 15px 10px; /* Adjust margin for small screens */
    padding: 10px;
  }
  .summary-section h3 {
    font-size: 1.2em;
  }
   .summary-section li ul {
    padding-left: 15px;
  }
  .image-grid {
    grid-template-columns: 1fr; /* Single column on very small screens */
  }
  .image-item img {
    max-height: 200px;
  }
}
</style>
