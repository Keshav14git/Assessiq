"use client";
import { IoVideocam } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdOutlineScreenShare } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import DevelopNotification from "@/components/ui/notification";



export default function LandingPage() {
  const pathname = usePathname();
  const logoRef = useRef<SVGSVGElement>(null);

  // Logo animation effect
  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const animation = logoElement.animate(
      [
        { transform: "scale(0.95)", opacity: 0.9 },
        { transform: "scale(1)", opacity: 1 },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
    <DevelopNotification />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/assess.png"
              alt="Assessiq Logo"
              fill
              className="object-contain backdrop-blur-md bg-transparent rounded-lg"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            AssessIQ : Next Generation
            <span className="block text-green-500">Assessment & Interview Platform</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Streamline your hiring process with AssessIQ - the platform for remote interviews with Integrated Monaco Code-Editor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/panel" 
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Everything you need in modern interview platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <FaUserFriends  className="w-6 h-6 text-green-500"  />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interviewer & Candidate</h3>
              <p className="text-gray-600 dark:text-gray-300">Defined roles for the user accordingly.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <IoVideocam className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Meeting</h3>
              <p className="text-gray-600 dark:text-gray-300">live meetings with one or more candidates as well as Interviewer. </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <HiCodeBracketSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Code-Editor</h3>
              <p className="text-gray-600 dark:text-gray-300">Integrated Monaco CodeEditor powered by Microsoft.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <MdOutlineScreenShare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ScreenShare</h3>
              <p className="text-gray-600 dark:text-gray-300">Enabled ScreenShare for better intraction.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <RiCalendarScheduleFill className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Meetings & Recordings</h3>
              <p className="text-gray-600 dark:text-gray-300">Candidate can get their meetings(interview) scheduled by the interviewer and recordings of the every meeting can be saved for later evaluation.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <SiClerk className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clerk-Convex</h3>
              <p className="text-gray-600 dark:text-gray-300">Integration of Clerk Auth with serverless backend Convex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Email</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Sales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="/assessiq.png"
                  alt="Assess Logo"
                  fill
                  className="object-contain backdrop-blur-md bg-transparent rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} AssessIQ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}