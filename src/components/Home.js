import "../components/home.css";
import Increment from "../components/increment";
function Home(props) {
  //   console.log(props);

  return (
    <>
      <div className="cards_content" style={{ color: props.color }}>
        <div>
          <p>
            jdfknvnjdfvjbfhbvjajkfv <br /> nvjfdnvdj fbvjvn <br />{" "}
            vjdfvnajdvdfvmdnfvnjdfvksdv <br /> jnvdjkfhgifskjdflseonvv
          </p>
          <button onClick={props.clickOnMe}>Read more</button>
        </div>
        <Increment />
      </div>
    </>
  );
}

export default Home;
