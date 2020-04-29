import {lazy} from "react";

export const Home = lazy(() => import("./pages/home/HomePage"));
export const AboutPage = lazy(() => import("./pages/about/AboutPage"));
export const MembershipPage = lazy(() => import("./pages/members/MembershipPage"));
export const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
export const HippocratesPage = lazy(() => import("./pages/hippocrates/HippocratesPage"));
export const DonatePage = lazy(() => import("./pages/donate/DonatePage"));
export const AllMembersPage = lazy(() => import("./pages/members/all-members/AllMembersPage"));
export const PostsPage = lazy(() => import("./pages/blog/posts/PostPage"));
export const PostShow = lazy(() => import("./components/blog/post/post-show/post-show.component"));
