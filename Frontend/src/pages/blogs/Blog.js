import { useEffect, useState } from "react";
import "../../style/Blog.css"


function Blog() {
  const [blogData, setBlogData] = useState([]);

  function fetchData(i) {
    return blogData.map(function (blog, index) {
      if (index === i)
        return (
          <BlogPost src={`assets/images/blogs/${blog.imageUrl}`} alt={blog.title} key={blog.id}>
            {blog.description}
          </BlogPost>
        );
    });
  }

  useEffect(function () {
    async function fetchBlog() {
      const res = await fetch("http://localhost:5000/api/v1/blogs");

      const data = await res.json();
      /*  console.log(data.data.blogs); */

      setBlogData(data.data.blogs);
    }

    fetchBlog();
  }, []);
  const [show, setShow] = useState(1);
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-posts">
          {show === 1 && fetchData(0)}

          {show === 2 && fetchData(1)}

          {show === 3 && fetchData(2)}

          {show === 4 && fetchData(3)}
        </div>

        <Pagination show={show} setShow={setShow} />
      </div>
    </section>
  );
}

function BlogPost({ children, src, alt }) {
  return (
    <div className="blog-post">
      <div className="post-img">
        <img src={src} alt={alt} />
      </div>
      <div className="blog-info">
        <p className="admin">By Admin March 24, 2021</p>
        <h3>
          Uompe Qrear High Ecent Nche Without Some Prinlc Uomp Without Some
          Qreari High Ecent
        </h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function BlogPostVid() {
  return (
    <div className="blog-post">
      <div className="video-post">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/URUJD5NEXC8?si=IwHIO4xk3EoHeni2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
      <div className="blog-info">
        <p className="admin">By Admin March 24, 2021</p>
        <h3>
          Uompe Qrear High Ecent Nche Without Some Prinlc Uomp Without Some
          Qreari High Ecent
        </h3>
        <p>
          Rapidiously integrate distributed supply chains through market
          position best practices chain market position bestin prac...
        </p>
      </div>
    </div>
  );
}

function Pagination({ show, setShow }) {
  return (
    <div className="pagination">
      <p className={show === 1 ? "active" : ""} onClick={() => setShow(1)}>
        1
      </p>

      <p className={show === 2 ? "active" : ""} onClick={() => setShow(2)}>
        2
      </p>
      <p className={show === 3 ? "active" : ""} onClick={() => setShow(3)}>
        3
      </p>
      <p className={show === 4 ? "active" : ""} onClick={() => setShow(4)}>
        4
      </p>
    </div>
  );
}
export default Blog;

// باى من غير سلام
