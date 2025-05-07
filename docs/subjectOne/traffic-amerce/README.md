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
</style>
