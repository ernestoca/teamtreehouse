/*
REPLACE BY a technique called Prototypal Inheritance to share methods 

function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
}

Song.prototype.play = function() {
    this.isPlaying = true;
};

Song.prototype.stop = function() {
    this.isPlaying = false;
};

Song.prototype.toHTML = function() {
    var htmlString = '<li';
    if(this.isPlaying) {
        htmlString += ' class="current"';   
    }    
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '</span></li>'; 
    return htmlString;
};*/

/*
Prototype Chain
What happens when there are objects with similar properties and behavior? Creating a separate constructor function for each type that do the same thing seems like a lot of work. Especially if the objects share the same behavior.
*/

function Song(title, artist, duration) {
    Media.call(this, title, duration); //In JavaScript, you can call any function programmatically using the call method. 
                                //The call method allows us to execute a function where we specify what the function should use as this.
                                //the media constructor takes two parameters, title and duration. So the first parameter sets the value of 'this'
                                //when the function is exectuted. The media call is acting like a regular function and
                                //all it's doing is decorating the song with new properties of title, duration, and isPlaying.
    /*this.title = title;*/ // Defined in media type.
    this.artist = artist;
    /*this.duration = duration;*/ // Defined in media type
    /*this.isPlaying = false;*/ // Defined in media type
}

Song.prototype = Object.create(Media.prototype); //What this basically does is it copies the references to the Media's
                                        //prototype properties and methods to the song's prototype. We're creating a prototype chain.
                                        //After that we can add specific methods to the first type for the song.
                                        //This syntax is new, this is how you create inheritance in Javascript.

Song.prototype.toHTML = function() {
    var htmlString = '<li';
    if(this.isPlaying) {
        htmlString += ' class="current"';   
    }    
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '</span></li>'; 
    return htmlString;
};

