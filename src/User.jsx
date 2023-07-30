import {useNavigate, useParams} from "react-router-dom";

export default function User() {
  const {name} = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Proflie</h1>
      <p> {name} </p>
      <a
        href="#/"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        &laquo; Go Back
      </a>
    </div>
  );
}
