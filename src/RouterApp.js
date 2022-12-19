import {
  Routes,
  Route,
  Outlet,
  useParams,
  useOutletContext,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <h1>REACT ROUTER v6</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />}></Route>
          <Route path="me" element={<UserMe />}></Route>
        </Route>
        <Route path="/loc" element={<Loc />} />
        <Route path="*" element={<Unknown />}></Route>
      </Routes>
    </>
  );
}

function Loc() {
  const { pathname, search, hash } = useLocation();
  return (
    <main>
      <h2>{pathname}</h2>
      <h2>{search}</h2>
      <h2>{hash}</h2>
      {/* <h3>{JSON.stringify(this.state)}</h3> */}
    </main>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <h2>This Is Home</h2>
      <p>
        <a
          onClick={() => {
            navigate("/users");
          }}
        >
          Go To Users
        </a>
      </p>
    </main>
  );
}

function Users() {
  return (
    <main>
      <h1>This Is USER</h1>

      <Outlet context={{ Damilola: Date.now() }} />

      <Routes>
        <Route path=":id" element={<User />}></Route>
        <Route path="me" element={<UserMe />}></Route>
      </Routes>
    </main>
  );
}

function User() {
  const { id } = useParams();
  const context = useOutletContext();
  const Damilola = context ? context.Damilola : "";
  return (
    <main>
      <h1>This Is User {id}</h1>
      <p>The Damilola DATA is {Damilola}</p>
    </main>
  );
}

function UserMe() {
  const context = useOutletContext();
  const Damilola = context ? context.Damilola : "";
  return;
  <main>
    <h1>This Is User ME</h1>
    <p>The Damilola DATA is {Damilola}</p>
  </main>;
}

function Unknown() {
  return <main>No !!! this fucking page does not exist</main>;
}

export default App;
