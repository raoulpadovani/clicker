-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 03 avr. 2025 à 09:56
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `cinema`
--

DROP TABLE IF EXISTS `cinema`;
CREATE TABLE IF NOT EXISTS `cinema` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `reponse` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cinema`
--

INSERT INTO `cinema` (`id`, `question`, `reponse`) VALUES
(1, 'Quel film a remporté l’Oscar du meilleur film en 1994 ?', 'a'),
(2, 'Qui a réalisé le film “Inception” sorti en 2010 ?', 'c'),
(3, ' Quel acteur incarne le personnage de Jack Sparrow dans la saga “Pirates des Caraïbes” ?', 'c');

-- --------------------------------------------------------

--
-- Structure de la table `connexion`
--

DROP TABLE IF EXISTS `connexion`;
CREATE TABLE IF NOT EXISTS `connexion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=162 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `connexion`
--

INSERT INTO `connexion` (`id`, `pseudo`, `mdp`) VALUES
(1, 'raoul', '0203');

-- --------------------------------------------------------

--
-- Structure de la table `cuisine`
--

DROP TABLE IF EXISTS `cuisine`;
CREATE TABLE IF NOT EXISTS `cuisine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `reponse` varchar(255) NOT NULL,
  `proposition` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cuisine`
--

INSERT INTO `cuisine` (`id`, `question`, `reponse`, `proposition`) VALUES
(1, 'Quel ingrédient est essentiel pour préparer un pesto traditionnel ?', 'b', ''),
(2, ' Quelle est la base principale d’un risotto ?', 'c', ''),
(3, 'Quel est le nom du plat espagnol à base de riz, de safran, de fruits de mer et de viande ?', 'a', 'paella');

-- --------------------------------------------------------

--
-- Structure de la table `football`
--

DROP TABLE IF EXISTS `football`;
CREATE TABLE IF NOT EXISTS `football` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `reponse` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `football`
--

INSERT INTO `football` (`id`, `question`, `reponse`) VALUES
(1, 'Question 1 : Quelpe nationale a remporté le plus de Coupes du Monde de la FIFA ?', 'l'),
(2, 'Question 2 : Quel joueur détient le record du nombre de Ballons d’Or remportés ?', 'b'),
(5, 'Quel club a remporté la Ligue des Champions de l’UEFA en 2020 ?', 'c');

-- --------------------------------------------------------

--
-- Structure de la table `histoire`
--

DROP TABLE IF EXISTS `histoire`;
CREATE TABLE IF NOT EXISTS `histoire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `reponse` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `histoire`
--

INSERT INTO `histoire` (`id`, `question`, `reponse`) VALUES
(1, 'En quelle année a eu lieu la Révolution française ?', 'c'),
(2, 'Quelle civilisation ancienne a construit les pyramides de Gizeh ?', 'c'),
(3, ' Qui était le premier président des États-Unis ?', 'b');

-- --------------------------------------------------------

--
-- Structure de la table `nouveau`
--

DROP TABLE IF EXISTS `nouveau`;
CREATE TABLE IF NOT EXISTS `nouveau` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quiz_id` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `reponse` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `propositions`
--

DROP TABLE IF EXISTS `propositions`;
CREATE TABLE IF NOT EXISTS `propositions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quiz_id` varchar(255) NOT NULL,
  `question_id` int NOT NULL,
  `proposition` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `propositions`
--

INSERT INTO `propositions` (`id`, `quiz_id`, `question_id`, `proposition`) VALUES
(1, 'football', 1, 'a) bresil , b) espagne , c) france'),
(2, 'football', 1, 'a'),
(3, 'football', 1, 'b'),
(4, 'football', 1, 'c'),
(5, 'football', 2, 'a) ronaldo b) messi c) mbappe'),
(6, 'football', 2, 'a'),
(7, 'football', 2, 'b'),
(8, 'football', 2, 'c'),
(14, 'nouveau', 1, 'a) real b) om c) bayern'),
(10, 'football', 5, 'a) real b) om c) bayern'),
(11, 'football', 5, 'a'),
(12, 'football', 5, 'b'),
(13, 'football', 5, 'c'),
(15, 'nouveau', 1, 'c'),
(16, 'cinema', 1, 'a) forest gump b) fresh c) angie'),
(17, 'cinema', 1, 'a'),
(18, 'cinema', 1, 'b'),
(19, 'cinema', 1, 'c'),
(20, 'cinema', 2, 'a) Steven Spielberg b) Quentin Tarantino c) Christopher Nolan'),
(29, 'cuisine', 1, 'a) coriande b)basilic c) persil'),
(22, 'cinema', 2, 'a'),
(23, 'cinema', 2, 'b'),
(24, 'cinema', 3, 'a) Andrew Garfield b) the rock c) Johnny Depp'),
(25, 'cinema', 2, 'c'),
(26, 'cinema', 3, 'a'),
(27, 'cinema', 3, 'b'),
(28, 'cinema', 3, 'c'),
(30, 'cuisine', 1, 'a'),
(31, 'cuisine', 1, 'b'),
(50, 'cuisine', 1, 'c'),
(34, 'cuisine', 2, 'a) riz thaï b) riz basmati c) Riz Arborio'),
(35, 'cuisine', 2, 'a'),
(36, 'cuisine', 2, 'b'),
(51, 'cuisine', 2, 'c'),
(38, 'cuisine', 3, 'a) paella b) gazpacho c) tapas'),
(39, 'cuisine', 3, 'a'),
(40, 'cuisine', 3, 'b'),
(41, 'histoire', 1, 'a) 1780 b) 1781 c) 1789'),
(42, 'histoire', 2, 'a) les algériens b) les suédois c) Les Égyptiens'),
(43, 'histoire', 2, 'a'),
(44, 'histoire', 2, 'b'),
(45, 'histoire', 2, 'c'),
(46, 'histoire', 3, 'a) Donal Trump b) George Washington	 c) Kennedy'),
(47, 'histoire', 3, 'a'),
(48, 'histoire', 3, 'b'),
(49, 'histoire', 3, 'c'),
(52, 'cuisine', 3, 'c'),
(53, 'histoire', 1, 'a'),
(54, 'histoire', 1, 'b'),
(55, 'histoire', 1, 'c');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
