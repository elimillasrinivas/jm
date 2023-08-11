import Layouts from "@layouts/Layouts";

import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from "@library/date";
import ImageView from "@components/ImageView";

import PageBanner from "@components/PageBanner";

const PostsDetail = (props) => {
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Blog Detail"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-detail detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post ">
                <div className="blog-image">
                  <figure>
                    <img src={postData.image} alt={postData.title} />
                  </figure>
                </div>
                <div className="blog-data">
                  <span className="blog-date">
                    <Date dateString={postData.date} />
                  </span>
                  <h2>{postData.title}</h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src={postData.author.avatar}
                          alt={postData.author.name}
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        {" "}
                        <span>by</span> {postData.author.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div
                  className="blog-detail-content"
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {typeof postData.gallery != "undefined" && (
                  <>
                    {postData.gallery.enabled == 1 && (
                      <div className="row justify-content-center">
                        {postData.gallery.items.map((item, key) => (
                          <div
                            key={`gallery-item-${key}`}
                            className={
                              postData.gallery.cols == 3
                                ? "col-lg-4"
                                : "col-lg-6"
                            }
                          >
                            <figure>
                              <a data-fancybox="gallery" href={item.image}>
                                <img src={item.image} alt={item.alt} />
                              </a>
                            </figure>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {typeof postData.additional != "undefined" && (
                  <>
                    {postData.additional.enabled == 1 && (
                      <div
                        className="blog-detail-content"
                        dangerouslySetInnerHTML={{
                          __html: postData.additional.content,
                        }}
                      />
                    )}
                  </>
                )}

                <div className="category shape">
                  <p>
                    Posted in{" "}
                    {postData.category.map((cat, key) => (
                      <a key={`category-item-${key}`}>{cat}</a>
                    ))}
                  </p>
                </div>

                <div className="category shape social-medias">
                  <p>Share this:</p>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="category shape form">
                  <h3>Leave a Comment</h3>
                  <p>Your email address will not be published.</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <textarea placeholder="Comment" />
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="text"
                          placeholder="Complete Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                   
                    <button type="submit" className="theme-btn">
                      Post Comment <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="box recent-posts">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <p>Unlock the Power of Strategic Staffing Solutions</p>
                      <a href="/blog/blog1">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>Empowering Your Online Presence with Jobminar Web Development</p>
                      <a href="/blog/blog2">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>Unleash Your Potential with Jobminar Digital Marketing</p>
                      <a href="/blog/blog3">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="box categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <p>Staffing</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <p>Construction</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <p>Projects</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <p>Events</p>
                      </a>
                    </li>
                  </ul>
                </div>
                
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}

      <ImageView />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const relatedPosts = await getRelatedPosts(params.id);

  return {
    props: {
      data: postData,
      related: relatedPosts,
    },
  };
}
