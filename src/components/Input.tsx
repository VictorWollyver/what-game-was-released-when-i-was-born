import React from "react";

const Input = ({ name }: { name: string }) => {
	return (
		<input
			className="bg-input-background h-16 w-[100%] py-4 px-6 font-normal rounded-2xl  text-base hover:shadow-lg hover:ring-2 hover:ring-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-opacity-50"
			type="text"
			name={name}
			placeholder="Mounth-Day"
		/>
	);
};

export default Input;
