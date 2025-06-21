const Main = ({ MainData }) => {
  return (
    <main>
      {MainData.map((item, idx) => {
        return (
          <section className={idx % 2 == 0 ? "" : "odd"} key={idx}>
            <div className="box1">
              <h1 className={item.className}>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="box2">
              <img src={item.image} alt="image" width={200} height={200} />
            </div>
          </section>
        );
      })}
      {/* <hr />
      <section className="odd">
        <div className="box1">
          <h1>Choose the perfect design</h1>
          <p>
            Create a beautiful blog that fits your style. Choose from a
            selection of easy-to-use templates – all with flexible layouts and
            hundreds of background images – or design something new.
          </p>
        </div>
        <div className="box2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPxRoPs_xSopXKA2Sc-X_Eq1l8hUSAh9N3g&s"
            alt="image"
            width={200}
            height={200}
          />
        </div>
      </section> */}
    </main>
  );
};

export default Main;
