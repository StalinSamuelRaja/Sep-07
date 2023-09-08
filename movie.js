class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movieArray) {
      return movieArray ((movie) => movie.rating === "PG");
    }
  }
  
 
  const movieInstance = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(movieInstance)
  