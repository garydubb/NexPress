import { CMS_NAME } from '@/constants/index';
import {
  Customer,
  SesstionStatusTypes,
} from '@/utils/context/types/session.types';
import { useAuthService } from '@/utils/functions/AuthService/AuthService';
import { useSession } from '@/utils/hookes/useSession';
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import Container from './components/container';
import Header from './components/header';
import Layout from './components/layout';

export default function NexPressThemeLogin({ settings }: any) {
  const meta = settings.generalSettings ?? '';
  const metaDesc =
    meta.description != '' ? meta.description : 'This is Website Tile';
  const { updateAndGetUserSession } = useSession();
  const { login, checkToken, getUserDetails } = useAuthService();
  const [user, setUser] = useState<Customer | null>(null);
  const [status, setStatus] = useState<SesstionStatusTypes>('loading');

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const checkAndFetchUser = async () => {
    try {
      const token = await checkToken();

      if (token) {
        router.push('/');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  //checkAndFetchUser();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login(values.username, values.password);
        if (response) {
          const resp = await updateAndGetUserSession();
          if (resp) {
            router.push('/');
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle error...
      }
    },
  });

  return (
    <Layout {...settings}>
      <Head>
        <title>{`${meta.title} | ${metaDesc} | ${CMS_NAME}`}</title>
      </Head>
      <Header {...settings} />
      <Container>
        <div className="min-h-screen flex flex-col justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {formik.status && formik.status.success && (
                  <div className="text-green-500">{formik.status.success}</div>
                )}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Username"
                    />
                  </div>
                  {formik.errors.username && formik.touched.username && (
                    <div className="text-red-500">{formik.errors.username}</div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Password"
                    />
                  </div>
                  {formik.errors.password && formik.touched.password && (
                    <div className="text-red-500">{formik.errors.password}</div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-center">
                  <Link href="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
