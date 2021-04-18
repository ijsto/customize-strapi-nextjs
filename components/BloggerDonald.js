const BloggerDonald = ({ posts }) => {
  const hasPosts = posts?.length;

  return (
    <div
      style={{
        left: hasPosts ? 33 : 'calc(50% - 155px)',
        position: 'fixed',
        textAlign: hasPosts ? 'left' : 'center',
        top: hasPosts ? 164 : 'calc(50% - 77px)',
        transition: 'all 0.15s',
      }}
    >
      <div>
        <img
          alt="Donald reading about React Props on iJS.to/blog"
          src="/img/donald-reading.png"
          height="180px"
        />
        <p>Awwuee, React Props...</p>
      </div>
    </div>
  );
};

export default BloggerDonald;
