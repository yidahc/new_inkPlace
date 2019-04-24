DROP DATABASE IF EXISTS inkPlace;

CREATE DATABASE inkPlace;

USE inkPlace;

CREATE TABLE styles (
  id int NOT NULL AUTO_INCREMENT,
  style varchar(60) NOT NULL,
  info  LONGTEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(32) NOT NULL,
  styleID int,
  FOREIGN KEY (styleID) REFERENCES styles(id),
  PRIMARY KEY (id)
);

CREATE TABLE studios (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(60) NOT NULL,
  address varchar(150) NOT NULL,
  styleID int,
  FOREIGN KEY (styleID) REFERENCES styles(id),
  PRIMARY KEY (id)
);

CREATE TABLE users (
id int AUTO_INCREMENT PRIMARY KEY,
email varchar(300),
name varchar(200),
provider varchar(50),
provider_id varchar(200),
provider_pic varchar(200),
token varchar(500))
;

CREATE TABLE appointments (
  id int NOT NULL AUTO_INCREMENT,
  size varchar(60),
  bodyPart varchar(60),
  apptDate DATETIME,
  studio int,
  FOREIGN KEY (studio) REFERENCES studios(id),
  PRIMARY KEY (ID),
  name int,
  FOREIGN KEY (name) REFERENCES users(id)
);


INSERT INTO styles (style,info) VALUES ("Old School","Old School style Tattoos (and Old Skool) become popular in 1920's. The main characteristics of the old school design are large anJapanese tattoos have an ancient tradition, but their connotation has almost always been associated with the criminal world. They were in fact used to mark criminals for life. The famous Yakuza drew from the tradition of tattoo making a real signature, so that even today, many public places prohibit the entry of tattooed people. Only a few years ago that the traditional Japanese tattoo (irezumi) found its definitive consecration breaking through the boundaries of the country and flooding around the world.
The subjects used range from animals, mythological demons, the koi carp and, fod bold images made with solid colours and thick outlines in either blue or black. The reason for the big and bold designs can mainly be attributed to the fact that the techniques used to create the tattoos are very different than those used today. Because the quality of the machines and the ink were not very good, the designs were kept simple and bold so they would wear well over time.
");

INSERT INTO styles (style,info) VALUES ("Japanese ","Japanese tattoos have an ancient tradition, but their connotation has almost always been associated with the criminal world. They were in fact used to mark criminals for life. The famous Yakuza drew from the tradition of tattoo making a real signature, so that even today, many public places prohibit the entry of tattooed people. Only a few years ago that the traditional Japanese tattoo (irezumi) found its definitive consecration breaking through the boundaries of the country and flooding around the world.
The subjects used range from animals, mythological demons, the koi carp and, for those who wear them, they become a sort of reminder of their life aspirations
");

INSERT INTO styles (style,info) VALUES ("Tribal","As specified by the word itself, the tribal tattoo indicates the category of tattoos that are based on traditional graphics of indigenous peoples and tribes all over the world. The tribal tattoos are definitely the first ones to be realized, in the entire history of man. Just think that found in the Italian Alps was a tattooed mummified body that dated back over 5000 years.
");

INSERT INTO styles (style,info) VALUES ("BlackWork","Blackwork is a style of tattooing that utilizes one distinctive color (take a wild guess at which one) to combine shading and line work into graphic designs. Subjects range super widely from animals to flowers to anatomical pieces to inanimate objects to skulls, mandalas, and really anything else you can think of. Blackwork has been around for centuries. People have been utilizing this particular style for years to convey a sense of uniqueness and individuality with varying degrees of light and dark space combined together into art. Due to the unlimited amount of subjects and variables, variety is one of the staples of blackwork tattoos.
");

INSERT INTO images (url, styleID) VALUES ("EBNnB8rm.jpg", 3);
INSERT INTO images (url, styleID) VALUES ("uRYRjSwm.jpg", 3);
INSERT INTO images (url, styleID) VALUES ("1RRp4Vsm.jpg", 3);
INSERT INTO images (url, styleID) VAlUES ("MZhs2w7m.jpg", 3);

INSERT INTO images (url, styleID) VAlUES ("qSEZIyCm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("ukW8TbOm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("xA98eCfm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("tNifkG2m.jpg", 1);

INSERT INTO images (url, styleID) VALUES ("TN8I14Gm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("5yAu48Fm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("SSLxOuWm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("vgp4KEvm.jpg", 2);

INSERT INTO images (url, styleID) VALUES ("Ore4QuLm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("OHzNnJSm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("psfnPnFm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("cZeurNVm.jpg", 4);

INSERT INTO studios (name, address, styleID) VALUES ("studio onix","Londres 28. Mexico City", 1);

INSERT INTO studios (name, address, styleID) VALUES ("north tattoo", "DIVISION DEL NORTE 3411 Col. EL ROSARIO, COYOACAN", 2);

INSERT INTO studios (name, address, styleID) VALUES ("daggamx", "Orizaba 203 col. Roma, Mexico city", 3);

INSERT INTO studios (name, address, styleID) VALUES ("nauyaca_mx", "Nauyaca, Avenida 5 de Mayo 29", 4);
