import axios from "axios";

export default function Home({ users }) {
  const UserCard = ({ user }) => {
    return (
      <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
        <p>{user.name}</p>
        <p>{user.lastName}</p>
        <p>{user.age}</p>
      </div>
    );
  };
  return (
    <div className=" flex justify-between m-16">
      {users.map((user) => {
        return <UserCard key={user._id} user={user} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/hello");
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
