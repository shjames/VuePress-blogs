# 速度相关

<div class="image-grid">
  <div class="image-item">
    <img src="./images/微信图片_20250507135911.jpg" alt="速度相关图片1">
    <p>速度相关图片1</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507144239.jpg" alt="速度相关图片2">
    <p>速度相关图片2</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507144638.jpg" alt="速度相关图片3">
    <p>速度相关图片3</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507145102.png" alt="速度相关图片4">
    <p>速度相关图片4</p>
  </div>
  <div class="image-item">
    <img src="./images/微信图片_20250507145315.jpg" alt="速度相关图片5">
    <p>速度相关图片5</p>
  </div>
</div>

<div class="speed-summary-section">
  <h2>行车速度规定总结</h2>

  <div class="summary-category">
    <div class="category-title">
      <span class="icon">⚠️</span>
      <h3>特殊情况限速</h3>
    </div>
    <div class="category-content">
      <p>在<strong>窄路、窄桥、急弯路、陡坡、隧道、铁路道口、掉头、转弯、下陡坡</strong>时，以及遇有<strong>沙尘、冰雹、雨、雪、雾、结冰</strong>等气象条件时，最高行驶速度不得超过 <strong>30 km/h</strong>。</p>
    </div>
  </div>

  <div class="summary-category">
    <div class="category-title">
      <span class="icon">🛣️</span>
      <h3>高速公路限速</h3>
    </div>
    <div class="category-content">
      <div class="lane-info">
        <h4>同向设有3条车道时：</h4>
        <ul>
          <li>最左侧车道：<strong>110 km/h 至 120 km/h</strong></li>
          <li>中间车道：<strong>90 km/h 至 110 km/h</strong> </li>
          <li>最右侧车道：<strong>60 km/h 至 90 km/h</strong> </li>
        </ul>
      </div>
      <div class="lane-info">
        <h4>同向设有2条车道时：</h4>
        <ul>
          <li>左侧车道：<strong>100 km/h 至 120 km/h</strong></li>
          <li>右侧车道：<strong>60 km/h 至 100 km/h</strong></li>
        </ul>
      </div>
      <p class="note"><strong>注意：</strong>高速公路最高限速一般不超过120 km/h，最低车速不得低于60 km/h。具体以路面限速标志为准。</p>
    </div>
  </div>

  <div class="summary-category">
    <div class="category-title">
      <span class="icon">🏙️</span>
      <h3>城市道路与一般公路限速 (记忆口诀: 3 4 5 7)</h3>
    </div>
    <div class="category-content">
      <div class="road-type">
        <h4>城市道路：</h4>
        <ul>
          <li>没有道路中心线的：最高 <strong>30 km/h</strong></li>
          <li>有中心线：最高 <strong>40 km/h</strong></li>
        </ul>
      </div>
      <div class="road-type">
        <h4>一般公路 (非高速)：</h4>
        <ul>
          <li>没有道路中心线的：最高 <strong>50 km/h</strong></li>
          <li>有中心线：最高 <strong>70 km/h</strong></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 30px 0;
}

.image-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.image-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.image-item p {
  padding: 10px;
  margin: 0;
  text-align: center;
  background-color: #f8f8f8;
  font-size: 14px;
}

/* New styles for the summary section */
.speed-summary-section {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 30px 0;
  padding: 20px;
  background-color: #f4f7f9; /* Light grayish blue background */
  border-radius: 10px;
  border: 1px solid #dce1e6; /* Softer border */
}

.speed-summary-section h2 {
  text-align: center;
  color: #2c3e50; /* Darker, more professional blue */
  margin-bottom: 30px;
  font-size: 1.7em; /* Slightly reduced for balance */
  font-weight: 600;
}

.summary-category {
  background-color: #ffffff; /* Pure white cards */
  border: 1px solid #e1e8ed; /* Lighter card border */
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* Softer, more modern shadow */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.summary-category:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.category-title {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #e9eff3; /* Lighter separator */
  padding-bottom: 15px;
}

.category-title .icon {
  font-size: 1.6em; /* Slightly larger icon */
  margin-right: 12px;
  color: #3498db; /* Brighter blue for icons */
}

.category-title h3 {
  margin: 0;
  color: #2980b9; /* Slightly lighter blue for titles */
  font-size: 1.3em; /* Adjusted for better hierarchy */
  font-weight: 500;
}

.category-content p,
.category-content ul {
  margin-bottom: 12px;
  line-height: 1.7; /* Increased line height for readability */
  color: #555f6d; /* Softer text color */
  font-size: 0.95em;
}

.category-content ul {
  list-style-type: none;
  padding-left: 5px; /* Reduced padding for a cleaner look */
}
.category-content ul li {
  margin-bottom: 10px; /* Increased spacing between list items */
  position: relative;
  padding-left: 22px; /* Space for custom bullet */
}

.category-content ul li::before {
  content: '✔'; /* Checkmark bullet */
  position: absolute;
  left: 0;
  color: #27ae60; /* Green for positive/informative items */
  font-weight: bold;
  font-size: 0.9em;
}


.category-content strong {
  color: #e74c3c; /* Stronger red for emphasis */
  font-weight: 600;
}

.lane-info, .road-type {
  margin-bottom: 18px;
  padding: 15px;
  background-color: #fbfcfd; /* Very light background for sub-sections */
  border-left: 4px solid #3498db; /* Accent border */
  border-radius: 0 4px 4px 0;
}

.lane-info h4, .road-type h4 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #34495e; /* Darker subheading color */
  font-size: 1.05em;
  font-weight: 500;
}

.note {
  font-size: 0.9em;
  color: #7f8c8d; /* Muted color for notes */
  background-color: #ecf0f1; /* Light gray background for notes */
  padding: 12px;
  border-radius: 4px;
  border-left: 4px solid #95a5a6; /* Gray accent for notes */
  margin-top: 15px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .speed-summary-section h2 {
    font-size: 1.5em;
  }
  .category-title h3 {
    font-size: 1.2em;
  }
  .category-content {
    font-size: 0.92em;
  }
  .lane-info, .road-type {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .speed-summary-section {
    padding: 15px;
    margin: 20px 0;
  }
  .summary-category {
    padding: 15px;
  }
  .category-title {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .category-title .icon {
    font-size: 1.4em;
    margin-right: 8px;
  }
  .speed-summary-section h2 {
    font-size: 1.35em;
    margin-bottom: 20px;
  }
  .category-title h3 {
    font-size: 1.1em;
  }
   .category-content ul {
    padding-left: 0;
  }
  .category-content ul li {
    padding-left: 20px; /* Ensure bullet is visible */
  }
  .note {
    padding: 10px;
    font-size: 0.85em;
  }
}
</style>
