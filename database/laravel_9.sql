-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 06, 2023 at 06:07 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_9`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_02_16_064716_add_google_id_column', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `google_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_access_token` text COLLATE utf8mb4_unicode_ci,
  `google_refresh_token` text COLLATE utf8mb4_unicode_ci,
  `google_expires_in` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `address`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `google_id`, `google_access_token`, `google_refresh_token`, `google_expires_in`) VALUES
(1, 'Cahyono Wawan Kurniawan S.T.', 'uiswahyudi@example.com', 'lanang05', 'Psr. Bawal No. 464, Bima 78787, Maluku', '2023-02-03 22:51:51', '$2y$10$91vdGmmWSnrXOVHouR13HOjTaJP3lEzTB4y71Nh0a9cOHpYfdUUAS', 'AEHcWYx4xz', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(2, 'Yahya Luthfi Prasetya', 'maya.firgantoro@example.org', 'mulyani.rahmi', 'Psr. Batako No. 115, Cilegon 71857, Riau', '2023-02-03 22:51:51', '$2y$10$7NKLOOYwJbVDsJbOMun9Fudzv7Q8AjMnaMQhiB1FAgM1isbWW/UBu', 'iSHARDbhGk', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(3, 'Pardi Prayoga', 'puput.suryono@example.org', 'gasti.rajata', 'Jln. Wahidin No. 739, Jayapura 62263, Kalteng', '2023-02-03 22:51:51', '$2y$10$DxWw65KOk/2NKlfXK0sW0O0k7YH5Jvfkpo6BiDC1NRnc/JID/o4.G', 'rYkkEDi46E', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(4, 'Latika Kuswandari', 'hidayanto.niyaga@example.com', 'nashiruddin.baktianto', 'Jr. K.H. Wahid Hasyim (Kopo) No. 666, Makassar 99863, Jateng', '2023-02-03 22:51:51', '$2y$10$4ePUZYEjHE13IyiWD6AKYuYnmVyqx5lIQ98QpqUM6SlKKo5Nj9pay', '2KPeTIuyYN', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(5, 'Vero Danu Widodo', 'mahdi86@example.net', 'vpratama', 'Psr. Bakin No. 24, Jayapura 15762, Gorontalo', '2023-02-03 22:51:51', '$2y$10$8dwu3UP7Y0TMMZIUXEIXOeanCmC44GikSrbUPHMITF5gXlMrey6.O', 'y7ParvNc9r', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(6, 'Sarah Rika Nuraini S.E.', 'ramadan.tasnim@example.org', 'czulaika', 'Dk. Basket No. 701, Madiun 69292, Bali', '2023-02-03 22:51:51', '$2y$10$9DXyGD8WEhfM1weWKL6zD.1FhptPdaZOAVVUYp3F.6pqYhFH9fNLO', 'Js4ME81Bw9', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(7, 'Kariman Tampubolon', 'aurora28@example.com', 'aslijan.pradipta', 'Gg. Jend. A. Yani No. 536, Bontang 61439, DKI', '2023-02-03 22:51:51', '$2y$10$i0LegFyob.rP2wul38W3Bu6W/ueIA6Ug/jvLqo.QZZ2VyGyTCaOYS', 'qNp7IPGmlN', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(8, 'Sari Permata', 'anggriawan.perkasa@example.org', 'harja31', 'Ds. Arifin No. 930, Langsa 72306, Kaltim', '2023-02-03 22:51:51', '$2y$10$bCJK.PlEQjgQ9su1afLbUeUstvcQ0A5LrPtzFfF6G0oS3tnbtgiQ.', 'gc9EMSnsMy', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(9, 'Cindy Utami', 'thastuti@example.net', 'elon.permadi', 'Gg. Kebonjati No. 271, Pontianak 45635, Sulbar', '2023-02-03 22:51:51', '$2y$10$wvHqZVm66I1Yt1tsLjlgdethaqAikXBRFfuue08FPaPOnEdiAo5CC', '1a3ooVl8TD', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(10, 'Ratna Vera Winarsih S.Kom', 'adiarja79@example.net', 'yuniar.titin', 'Jln. Bahagia  No. 146, Palu 15321, Jateng', '2023-02-03 22:51:51', '$2y$10$nII05t0UNogcCqZmCeHxoOATO7Q8RJJSo29eqYPEYshWllMF7l2QS', '9Y6z8SZzTX', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(11, 'Nyana Hutagalung', 'jagustina@example.org', 'purwadi.mayasari', 'Kpg. Bara No. 744, Bandar Lampung 97453, Sulut', '2023-02-03 22:51:51', '$2y$10$/2DhWgSZH7jtSdahp2mbpuutaeHNZtKpCZQ4F1ZyNra69HhaZyKF2', 'lh5o8N4vvV', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(12, 'Rudi Saragih', 'joko88@example.org', 'raden.hutapea', 'Dk. Supono No. 30, Salatiga 56669, Jabar', '2023-02-03 22:51:52', '$2y$10$kuIS5mbFZeHg3PW.VoI4WeMcq1MPjtEBf8djjwn1Ur.N0ftwvUUlK', 'Bg52PXQtJN', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(13, 'Mahesa Prabowo M.TI.', 'zaenab.budiyanto@example.net', 'silvia.mardhiyah', 'Kpg. Pahlawan No. 99, Banjar 70846, Bali', '2023-02-03 22:51:52', '$2y$10$sWkrE/kT9TgzX0ghDnhHXukwhGuaHlAx8roTVdlbC8LedT7RiM1Te', 'HhrPnebVhj', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(14, 'Artanto Setiawan', 'zalindra.anggriawan@example.net', 'laksita.ihsan', 'Jln. Flora No. 117, Parepare 59181, Maluku', '2023-02-03 22:51:52', '$2y$10$EJp1cAhUy8KrAqURqoHQ9.UwdyThA25d/oP1y1GR3tJmYBR8RAG56', 'abOgDXPrh3', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(15, 'Aditya Mustofa S.IP', 'irwan71@example.net', 'harto61', 'Jln. Lembong No. 161, Ambon 34029, NTT', '2023-02-03 22:51:52', '$2y$10$MD3pQq9uETWHC1YqO0W6NOD9EHs5OXdoHB5cOvcWKGwZj29Wg6yNi', 'fx5QUze98F', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(16, 'Niyaga Pradana', 'salwa.laksita@example.net', 'chelsea34', 'Gg. Merdeka No. 533, Langsa 94533, Kepri', '2023-02-03 22:51:52', '$2y$10$dDQeyCxj1t1V1Jfy5lGadOroAAYxb9tqwALSOFqHuK519ZVIi5L46', 'Xm4dc7VGzH', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(17, 'Balangga Danuja Gunawan', 'icha.hariyah@example.com', 'lyuniar', 'Ki. Kalimalang No. 958, Administrasi Jakarta Selatan 86172, Bali', '2023-02-03 22:51:52', '$2y$10$MiSnmgCKjV5VVCG76OvFjeTZY5ohCILS6AcuYuSNMyefIadmIiSeC', 'b2yZMDZrrf', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(18, 'Endra Endra Mustofa M.TI.', 'omulyani@example.net', 'lidya06', 'Psr. Padang No. 426, Blitar 73633, Sulbar', '2023-02-03 22:51:52', '$2y$10$5uMrWX.dslEb1/xqjBFPFOzfrNyfZL15JTJJkGtzTdqZGg5U.pHWS', 'YZtf507N3r', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(19, 'Halima Hariyah', 'najmudin.putu@example.com', 'mansur.ajimat', 'Jln. Bakti No. 904, Cirebon 57263, Lampung', '2023-02-03 22:51:52', '$2y$10$tnowseRNh04lmf5kIzi9VuZqQ3FNdmqUdLIwsn0Q2x3REtaW1ojre', 'BhwiXDcZUy', '2023-02-03 22:51:54', '2023-02-03 22:51:54', NULL, NULL, NULL, NULL),
(20, 'Ana Halimah', 'adriansyah.cakrajiya@example.net', 'eiswahyudi', 'Gg. Tentara Pelajar No. 772, Kediri 42448, DKI', '2023-02-03 22:51:52', '$2y$10$ijVYcoObN15ddtWd5aNSkeZIdRVnlBc7tLvQDBtiAIoeeNao3LMDS', '34MQlpKJiQ', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(21, 'Umay Mangunsong', 'sabrina.lailasari@example.org', 'nurul57', 'Kpg. Jend. A. Yani No. 589, Pontianak 80225, Sumut', '2023-02-03 22:51:52', '$2y$10$sO98CCpyr7/9J9.EmJpNu.t0TfXU.f8alwJjSLk3Xzmqf9ySqOrju', '8el9bDKQqx', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(22, 'Usyi Cici Farida', 'cardianto@example.net', 'purnawati.bagus', 'Kpg. Bakau Griya Utama No. 56, Batam 55139, Kaltara', '2023-02-03 22:51:52', '$2y$10$U2P12ZquqRStTQ/S82KZROmrz6kjj1zAnsHd1wsOksQo3wA/2gwoK', '9stLKOuay7', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(23, 'Candrakanta Prasetya', 'slamet46@example.org', 'emong71', 'Gg. Jaksa No. 227, Kotamobagu 86531, Sulteng', '2023-02-03 22:51:52', '$2y$10$HsRGR88mXH/tlZCZR5P.r.mYZq0a9xiY4fctZcq7DssVIaHmeZEz2', 'FNGO7sXTh4', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(24, 'Kardi Najmudin', 'novitasari.calista@example.net', 'kusmawati.lasmanto', 'Psr. R.E. Martadinata No. 47, Probolinggo 20326, Sultra', '2023-02-03 22:51:52', '$2y$10$.LaXSItUq16gUDMre8I6ou/oBwbZ49y5U73RJQ18ZqBvUlzwn4ZG2', 'zV4OWN2xSD', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(25, 'Iriana Usada', 'nyoman55@example.org', 'sudiati.jarwa', 'Kpg. Setiabudhi No. 342, Pagar Alam 59699, Sulbar', '2023-02-03 22:51:52', '$2y$10$9d8laD.VBJO7fl0dyxRLq.b2n/wvDdQNd0/gW0mJ3BMCQ4BTaaOIy', 'uEiROWvAR3', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(26, 'Kurnia Marpaung', 'mandasari.mahmud@example.com', 'yosef87', 'Ki. Babadak No. 147, Yogyakarta 37805, Bengkulu', '2023-02-03 22:51:53', '$2y$10$U7HROFt/LKv9izbPbtPs9.isKW8LPKNHOXSqXGhXow8PDWBg12aAi', 'cWKTs4JTKh', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(27, 'Prabawa Laswi Hidayanto S.T.', 'bambang.zulkarnain@example.com', 'uyainah.ajimin', 'Gg. Ketandan No. 837, Pangkal Pinang 54584, DIY', '2023-02-03 22:51:53', '$2y$10$jE8NCKaOe1EO6Il1FYMRq.0pVXN2k7vjFiyYoKOy7tQ7iDFQOfIZu', 'JrdvWvQD2q', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(28, 'Purwanto Gunarto', 'nhidayanto@example.com', 'ella71', 'Gg. Suryo Pranoto No. 162, Bau-Bau 29194, Maluku', '2023-02-03 22:51:53', '$2y$10$nQbbSn5770i1s8D/pgO/eOzTYqCY0Z56JMJCbeIzBjhF/O9rDf/eW', 'jC8USCIjB2', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(29, 'Prabowo Sinaga S.Sos', 'daruna.wacana@example.org', 'rahmat.utami', 'Gg. Nakula No. 398, Palembang 64185, Jabar', '2023-02-03 22:51:53', '$2y$10$6rF9SFcpSC5w/IdtGpO.leR85UUW48F7DILOwYFgdbMxwe4VCmAT2', 'KGW4IKIGFT', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(30, 'Jaka Maheswara S.Ked', 'kusumo.bagus@example.org', 'elma06', 'Ds. Moch. Ramdan No. 906, Padangsidempuan 43874, Kalbar', '2023-02-03 22:51:53', '$2y$10$6hh/Ks8Pmf0fLiQlFtZque3yxw8e0IVmMGpZGCiQSUX8DSDBNPA.K', '0H77MQQEN5', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(31, 'Wadi Widodo', 'malika.wibowo@example.com', 'muhammad43', 'Jr. Uluwatu No. 61, Padang 95715, Jabar', '2023-02-03 22:51:53', '$2y$10$/jcn.lJV/qmNolpQP9Kzc.UiCNyXeKRWaUyOJRa9jeuZjNDQNfsje', 'cy1vvVR0wi', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(32, 'Ratih Rahmawati', 'jatmiko.zulaika@example.net', 'znovitasari', 'Ki. Laksamana No. 400, Sorong 75438, Malut', '2023-02-03 22:51:53', '$2y$10$y7m2ooJ61thdOHMIaNY8v.n8w7gz59wZukcD9q5CJ.3tOCzI/mr/W', 'Bt9UPTaIwt', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(33, 'Rama Maryadi S.Kom', 'eli07@example.org', 'putri45', 'Kpg. Baik No. 613, Padangsidempuan 71831, Papua', '2023-02-03 22:51:53', '$2y$10$yQQiVv5PBm/tTajhKoHM1epFa8Gct8ln81kgvup2eGxmnQuGjVkGS', '7ZeSOIjezu', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(34, 'Paris Laksmiwati S.Ked', 'kuswoyo.victoria@example.com', 'zmaryati', 'Jr. Bakau Griya Utama No. 946, Gorontalo 52999, Sumsel', '2023-02-03 22:51:53', '$2y$10$OtcVAviTCyQolECsd/jff.01p9U63PDqB0c8Ub74PpkZXzbOwrXnO', 'sfqFOvC8II', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(35, 'Luthfi Damanik S.Pt', 'tantri.waluyo@example.org', 'kadir35', 'Jln. Dipenogoro No. 71, Surakarta 31137, Kalbar', '2023-02-03 22:51:53', '$2y$10$irnJjhCIxvb8l.Yhh807L.3Tq0XyyqRBcbtcTU8t.fRuxdOo0P5s.', 'LVsoKvu0n0', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(36, 'Paulin Mulyani', 'mursita99@example.com', 'jamal23', 'Dk. Raya Ujungberung No. 429, Palopo 96939, Lampung', '2023-02-03 22:51:53', '$2y$10$OvOAJOpIQkOwKBl6hOoZWu0oUl20Yf2IDHrsMMBG96bMFBEYhiHo2', 'BKaxlI06rm', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(37, 'Cawisadi Maheswara', 'kayla.widodo@example.org', 'iiswahyudi', 'Ds. Batako No. 135, Batu 44002, Jatim', '2023-02-03 22:51:53', '$2y$10$poTCwMmI4ZibqLxN.FhbDecIx2Dm9jBEMTXTHCdL8mutfmYA4PJgG', 'WRVMr5PHju', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(38, 'Rafi Tasnim Irawan', 'panji44@example.com', 'praba.halimah', 'Psr. Nakula No. 363, Gunungsitoli 52528, Sulsel', '2023-02-03 22:51:53', '$2y$10$em83PSB9Xfghi2CdKObWweOfuyVOamRG1QO5K.jdjq.LPD9mWHuD6', 'pyXFHVrucZ', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(39, 'Lega Simanjuntak', 'rgunarto@example.org', 'rahmi29', 'Dk. Supono No. 791, Medan 57153, Aceh', '2023-02-03 22:51:53', '$2y$10$FeHFMWjX.GYf61HpG7D/o.Gq8n2tqcQqjJVG0hRohVK965YA1nv5C', 'R50bNZQcn8', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(40, 'Mulya Sirait', 'surya27@example.com', 'luis84', 'Gg. Raya Setiabudhi No. 504, Bontang 44935, Riau', '2023-02-03 22:51:54', '$2y$10$BKCe7wf3a1GC7AWMsdMWK.6HFIvkiVzvkcPwOLb/A.WsW3DuhcHze', 's6IUT3Yp94', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(41, 'Chelsea Yolanda', 'febi.prabowo@example.net', 'hastuti.yusuf', 'Kpg. Kalimalang No. 470, Tangerang Selatan 22395, Sumsel', '2023-02-03 22:51:54', '$2y$10$ODqlXIKf8SGiba816FpcyuB1YQ/xzjne4Asa32D1cZBIZb/FugTFO', 'IcE4iqtXmX', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(42, 'Warsita Waluyo', 'jane21@example.com', 'ayu73', 'Dk. Abdul Muis No. 181, Batu 49417, Kalteng', '2023-02-03 22:51:54', '$2y$10$0rGoXsHWF5JBwA2NsnVtp.2Vjj/QM.tOHFx/IFruEmJ1Iv3Y8kZom', 'V3TF4GQULz', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(43, 'Diah Padmasari S.Ked', 'ika12@example.org', 'ifa01', 'Gg. Banda No. 335, Administrasi Jakarta Barat 53147, Pabar', '2023-02-03 22:51:54', '$2y$10$Yf1QgeyaVADtA9w7BS.TZOo0Cy8pPcX46pcyUYMiLjqbHgwu1K8Ja', 'anfWWBL21D', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(44, 'Hesti Cinthia Rahimah', 'phardiansyah@example.org', 'zprakasa', 'Dk. Ir. H. Juanda No. 847, Tasikmalaya 64333, Bali', '2023-02-03 22:51:54', '$2y$10$S8uyWlyGnPgeDMlDcLN4m.cHDCaivx5lxVa/8fBt.FfDPPrsHiWLW', 'ALgS8NLKSs', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(45, 'Murti Marpaung', 'mardhiyah.kamila@example.org', 'purwadi95', 'Kpg. Sukajadi No. 701, Bandar Lampung 23305, Papua', '2023-02-03 22:51:54', '$2y$10$wSPKC.Ug7boUPbDGCDDgkuZCPgXRQLVgQH5UpbR30G9kBpjSGD3qi', 'VC7IrxDPiO', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(46, 'Ozy Waluyo Tarihoran M.Farm', 'ophelia.thamrin@example.com', 'rangga.rahayu', 'Kpg. Abdul Muis No. 897, Semarang 56273, NTB', '2023-02-03 22:51:54', '$2y$10$zDacdPSkvRFFlzHP4PpTwOmfhliEd.fg8gMrpDIZVdOivSevnKPAq', 'yjyb1PHZRP', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(47, 'Dimas Natsir', 'sabar46@example.org', 'hidayat.mahfud', 'Ki. Reksoninten No. 657, Cilegon 92765, Jateng', '2023-02-03 22:51:54', '$2y$10$6cjkzsTqG4RY8bTiVaIo4.sg6YfxtW.FjFxmLE68ssjlwiBRH8DWq', 'nk2BOcIfhN', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(48, 'Elma Riyanti', 'anastasia33@example.net', 'pwibisono', 'Jln. Baranang No. 305, Balikpapan 76797, Sumsel', '2023-02-03 22:51:54', '$2y$10$MRzgC0N7/FajQvEVJHzPz.DyAUVNy4NaFQz5y0cBc9Ilh1VPs88dq', 'PLT8QvXKS4', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(49, 'Icha Kamila Nasyiah', 'karsana58@example.org', 'vero.kusmawati', 'Ki. Ahmad Dahlan No. 978, Administrasi Jakarta Pusat 82810, Sulut', '2023-02-03 22:51:54', '$2y$10$gGAj6.mj8wBiBRJAiGRf5.co5HbRy0pB3k/Wdv7sRLElXcsktZlSC', 'SXgVHvjx1c', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(50, 'Dacin Jaeman Wijaya', 'najib.manullang@example.org', 'dadap.handayani', 'Ds. Honggowongso No. 501, Palembang 60809, Sulbar', '2023-02-03 22:51:54', '$2y$10$j18TdjOW6mdotMLQH9JYoegI0GKdaizJdY33WixX0OPea.XS3CNne', 'gXvrehQ1k1', '2023-02-03 22:51:55', '2023-02-03 22:51:55', NULL, NULL, NULL, NULL),
(51, 'Rayhan', 'rayhan@lskit.com', 'Rayhan', NULL, NULL, '$2y$10$uxr0EQvubLzGO1CGFK/HgeeCAZwDPU1y0jebB9aM887F4hlT938/W', NULL, '2023-02-03 22:53:41', '2023-02-03 22:53:41', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
