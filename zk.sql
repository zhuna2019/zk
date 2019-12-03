-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-08-24 08:15:51
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rh`
--

-- --------------------------------------------------------

--
-- 表的结构 `rent_collection`
--

CREATE TABLE `rent_collection` (
  `id` int(11) NOT NULL,
  `hid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `housename` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rent_collection`
--

INSERT INTO `rent_collection` (`id`, `hid`, `uid`, `housename`, `price`, `pic`) VALUES
(39, 1, 1, '洱海民宿', '4999.00', '01.jpg'),
(40, 2, 1, '丽江民宿', '5999.00', '02.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `rent_house`
--

CREATE TABLE `rent_house` (
  `hid` int(11) NOT NULL,
  `housename` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `price` decimal(7,2) NOT NULL DEFAULT '6999.00',
  `promise` varchar(256) DEFAULT NULL,
  `spec` varchar(32) DEFAULT NULL,
  `pic` varchar(128) NOT NULL,
  `detail` varchar(3000) DEFAULT NULL,
  `isRented` smallint(6) NOT NULL,
  `house_area` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rent_house`
--

INSERT INTO `rent_house` (`hid`, `housename`, `title`, `price`, `promise`, `spec`, `pic`, `detail`, `isRented`, `house_area`) VALUES
(1, '洱海民宿', '云南风温馨小屋', '4999.00', '入住前12小时无条件退房', '大床房', '01.jpg', '详情一', 0, '西湖区'),
(2, '丽江民宿', '近江渔村', '5999.00', '入住前12小时无条件退房', '大床房', '02.jpg', '详情二', 0, '滨江区'),
(3, '香格里拉民宿', '人间天堂', '6999.00', '入住前12小时无条件退房', '大床房', '03.jpg', '详情三', 0, '上城区'),
(4, '洱海一民宿', '云南风温馨小屋', '4009.00', '入住前12小时无条件退房', '大床房', '04.jpg', '详情四', 0, '下城区'),
(5, '丽江一民宿', '近江渔村', '5009.00', '入住前12小时无条件退房', '大床房', '05.jpg', '详情五', 0, '萧山区'),
(6, '香格里拉一民宿', '人间天堂', '6009.00', '入住前12小时无条件退房', '大床房', '06.jpg', '详情六', 1, '富阳区'),
(7, '洱海二民宿', '云南风温馨小屋', '3899.00', '入住前12小时无条件退房', '大床房', '07.jpg', '详情七', 0, '千岛湖'),
(8, '丽江二民宿', '近江渔村', '5900.00', '入住前12小时无条件退房', '大床房', '08.jpg', '详情八', 0, '江干区'),
(9, '香格里拉二民宿', '人间天堂', '6000.00', '入住前12小时无条件退房', '大床房', '01.png', '详情九', 0, '西湖区');

-- --------------------------------------------------------

--
-- 表的结构 `rent_user`
--

CREATE TABLE `rent_user` (
  `uid` smallint(6) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rent_user`
--

INSERT INTO `rent_user` (`uid`, `uname`, `upwd`, `phone`, `avatar`, `user_name`, `gender`) VALUES
(1, 'dingding', 'e10adc3949ba59abbe56e057f20f883e', '15658150402', 'img/01.png', '林钉钉', 0),
(2, 'tom', 'e10adc3949ba59abbe56e057f20f883e', '13612345679', 'img/01.png', '汤姆', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rent_collection`
--
ALTER TABLE `rent_collection`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `rent_house`
--
ALTER TABLE `rent_house`
  ADD PRIMARY KEY (`hid`),
  ADD UNIQUE KEY `title` (`housename`);

--
-- Indexes for table `rent_user`
--
ALTER TABLE `rent_user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `uname` (`uname`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `rent_collection`
--
ALTER TABLE `rent_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用表AUTO_INCREMENT `rent_house`
--
ALTER TABLE `rent_house`
  MODIFY `hid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
