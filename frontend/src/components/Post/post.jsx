import "./post.css";
import image1 from "../../assets/image/1.png";
const Post = () => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="texts">
          <h2>Title</h2>
          <p className="info">
            <a href="" className="author">
              Ram
            </a>
            <time>2023-02-10</time>
          </p>
          <p className="summary"> Description</p>
        </div>
      </div>
    </>
  );
};

export default Post;
