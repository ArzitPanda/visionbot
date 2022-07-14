import {ImTarget} from 'react-icons/im'





export const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-slate-300">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <ImTarget color="black" />
            </div>
            <h6 className="text-4xl font-bold text-white p-2">
              819
            </h6>
            <p className="mb-2 font-bold text-md">something</p>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <ImTarget color="black" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 p-2">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <ImTarget color="black" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 p-2">91</h6>
            <p className="mb-2 font-bold text-md">Subscribers</p>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <ImTarget color="black" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 p-2">52</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
        </div>
      </div>
    );
  };