import { CMS_NAME } from '@/constants/index';
import { REGISTER_USER } from '@/utils/queries/register';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import * as Yup from 'yup';
import Container from './components/container';
import Header from './components/header';
import Layout from './components/layout';

export default function NexPressThemeRegister({ settings }: any) {
  const meta = settings.generalSettings ?? '';
  const metaDesc =
    meta.description != '' ? meta.description : 'This is Website Tile';

  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      registerUser({
        variables: {
          input: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        },
      });
    },
  });

  // When the registration mutation is completed, save the JWT token in localStorage
  useEffect(() => {
    if (data && data.registerUser && data.registerUser.authToken) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('jwt-token', data.registerUser.authToken);
      }
    }
  }, [data]);

  return (
    <Layout {...settings}>
      <Head>
        <title>{`${meta.title} | ${metaDesc} | ${CMS_NAME}`}</title>
      </Head>
      <Header {...settings} />
      <Container>
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
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
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Email Address"
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
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
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Confirm Password"
                    />
                  </div>
                  {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword && (
                    <div className="text-red-500">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <Link href="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
