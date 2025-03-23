-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2025 at 04:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `leaderboard_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `profile_pic` varchar(255) DEFAULT 'default.jpg',
  `marks` int(11) NOT NULL DEFAULT 0,
  `activity_points` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `profile_pic`, `marks`, `activity_points`, `created_at`) VALUES
(4, 'Diana ', 'https://randomuser.me/api/portraits/women/4.jpg', 3234, 423, '2024-05-22 08:40:46'),
(12, 'Sanya Kapoor', 'https://randomuser.me/api/portraits/women/2.jpg', 420, 140, '2025-03-22 11:47:10'),
(13, 'Rohan Mehta', 'https://randomuser.me/api/portraits/men/3.jpg', 390, 160, '0000-00-00 00:00:00'),
(14, 'Neha Verma', 'https://randomuser.me/api/portraits/women/4.jpg', 380, 100, '2025-03-22 11:47:10'),
(15, 'Vikram Singh', 'https://randomuser.me/api/portraits/men/5.jpg', 360, 110, '2025-03-22 11:47:10'),
(16, 'Priya Nair', 'https://randomuser.me/api/portraits/women/6.jpg', 350, 130, '2025-03-22 11:47:10'),
(17, 'Rahul Gupta', 'https://randomuser.me/api/portraits/men/7.jpg', 340, 90, '2025-03-22 11:47:10'),
(18, 'Aditi Deshmukh', 'https://randomuser.me/api/portraits/women/8.jpg', 330, 105, '2025-03-22 11:47:10'),
(20, 'Meera Iyer', 'https://randomuser.me/api/portraits/women/10.jpg', 310, 95, '2025-03-22 11:47:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
