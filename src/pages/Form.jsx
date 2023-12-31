import SignUpPart from '../components/SignUpPart';
import PersonalInfoPart from '../components/PersonalInfoPart';
import MoreInfoPart1 from '../components/MoreInfoPart1';
import logo from '../assets/ISPSC_LOGO_new.png';
import { useState } from 'react';
import axios from 'axios';

const apiEndpoints = {
  userInfo: '/user-info',
  personalInfo: '/personal-info',
  educationalAttainment: '/educational-attainment',
};

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    emailadd: '',
    contactnumber: '',
    civilstatus: '',
    gender: '',
    birthday: '',
    regionorigin: '',
    province: '',
    residence: '',
  });

  const RegisterUser = async (e) => {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      emailadd,
      contactnumber,
      civilstatus,
      gender,
      birthday,
      regionorigin,
      province,
      residence,
      educattainment,
      profexam,
    } = data;
    e.preventDefault();
    // try {
    //   await axios.post('/register', {
    //     username,
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //     emailadd,
    //     contactnumber,
    //     civilstatus,
    //     gender,
    //     birthday,
    //     regionorigin,
    //     province,
    //     residence,
    //   });
    //   alert('registration successful');
    // } catch (error) {
    //   alert('Registration failed');
    //   console.log(error);
    // }

    try {
      // POST request for User Info
      const userInfoResponse = await axios.post(apiEndpoints.userInfo, {
        username,
        email,
        password,
      });
      console.log('User Info Created:', userInfoResponse.data);
    } catch (error) {
      console.error('Error creating User Info:', error);
    }

    // POST request for Personal Info
    try {
      const personalInfoResponse = await axios.post(apiEndpoints.personalInfo, {
        firstName,
        lastName,
        emailadd,
        contactnumber,
        civilstatus,
        gender,
        birthday,
        regionorigin,
        province,
        residence,
      });
      console.log('Personal Info Created:', personalInfoResponse.data);
    } catch (error) {
      console.error('Error creating Personal Info:', error);
    }

    // POST request for Educational Attainment
    try {
      const educationalAttainmentResponse = await axios.post(
        apiEndpoints.educationalAttainment,
        {
          educattainment,
          profexam,
        }
      );
      console.log(
        'Educational Attainment Created:',
        educationalAttainmentResponse.data
      );
    } catch (error) {
      console.error('Error creating Educational Attainment:', error);
    }
  };

  const titles = ['User Info', 'Personal Info', 'Educational Attainment'];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpPart data={data} setData={setData} />;
    } else if (page === 1) {
      return <PersonalInfoPart data={data} setData={setData} />;
    } else {
      return <MoreInfoPart1 data={data} setData={setData} />;
    }
  };

  return (
    <div className="w-full h-screen min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen">
      <div>
        <div>Progress Bar</div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="/" />
        <h1 className="mt-auto text-center text-3xl font-bold tracking-tight text-gray-900">
          {titles[page]}
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-6xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          {/* Hello */}
          <div>{PageDisplay()}</div>
          <div className="flex flex-row gap-3 pt-8">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Prev
            </button>
            {/*  */}
            {/*  */}
            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  alert('Form Submitted');
                  RegisterUser(e);
                  console.log(data);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
