import profile from "../assets/default_profile.jpeg"

function Doctor ({ name, specialist,email }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 cursor-pointer hover:shadow-2xl">
            <img src={profile}  className="w-[50%] h-auto object-cover ml-[25%]" />
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600">{specialist}</p>
                <p className="text-gray-600">{email}</p>
            </div>
        </div>
    );
};

export default Doctor;

