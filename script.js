




/*document.addEventListener('DOMContentLoaded', () => {        //dom & location
    // Array containing the names of the mp3 files
    const musicFiles = [
        'Off The Record.mp3',
        'Bloodline.mp3',
        'Supernatural.mp3',
        'Side To Side.mp3',
        'Pookie.mp3',
        'BLUE.mp3',
        'LAMOUR DE MA VIE.mp3',
        'Havana.mp3',
        'Shameless.mp3',
        'I Dont Think That I Like Her.mp3',
        'We Don\'t Talk Anymore.mp3',
        'When I Get Old.mp3',
        'Heather.mp3',
        'double take.mp3',
        'Diet Mountain Dew.mp3',
        'Need To Know.mp3',
        'Woman.mp3',
        'You Right.mp3',
        'Drive Thru.mp3',
        'Kiss and Make Up.mp3',
        'Without Me.mp3',
        'Know Me.mp3',
        'You & Me.mp3',
        'Doin Time.mp3',
        'Perfect Night.mp3',
        'Think About Us.mp3',
        'Wasabi.mp3',
        'ILLELLA.mp3',
        'Know Me Too Well.mp3',
        'Drivers license.mp3',
        'Happier.mp3',
        'Love is embarrassing.mp3',
        'At My Worst.mp3',
        'Because i liked a boy.mp3',
        'Dancing With Your Ghost.mp3',
        'Older.mp3',
        'Señorita.mp3',
        'Snowman.mp3',
        'Still With You.mp3',
        'Sweet.mp3',
        'Kill Bill.mp3',
        'London Boy.mp3',
        'Sweet Nothing.mp3',
        'In Your Eyes.mp3',
        'One Of The Girls.mp3',
        'So Tender.mp',
    ];

    // The folder where the mp3 files are located
    const folderPath = 'D:\\Spotify_Clone\\Songs\\'; // Note the double backslashes for Windows paths

    // Get the music container element
    const musicContainer = document.getElementById('music-container');

    // Loop through the music files array and create audio elements
    musicFiles.forEach(file => {
        // Create an audio element
        const audioElement = document.createElement('audio');
        audioElement.controls = true; // Add controls to the audio element
        audioElement.src = folderPath + file; // Set the source to the file path

        // Create a label for the audio file
        const label = document.createElement('p');
        label.textContent = file;

        // Add the label and audio element to the container
        musicContainer.appendChild(label);
        musicContainer.appendChild(audioElement);
    });
});*/


/*// List of MP3 files (you must manually list them)           //click
const songs = [
    'Off The Record.mp3',
    'Bloodline.mp3',
    'Supernatural.mp3',
    'Side To Side.mp3',
    'Pookie.mp3',
    'BLUE.mp3',
    'LAMOUR DE MA VIE.mp3',
    'Havana.mp3',
    'Shameless.mp3',
    'I Dont Think That I Like Her.mp3',
    'We Don\'t Talk Anymore.mp3',
    'When I Get Old.mp3',
    'Heather.mp3',
    'double take.mp3',
    'Diet Mountain Dew.mp3',
    'Need To Know.mp3',
    'Woman.mp3',
    'You Right.mp3',
    'Drive Thru.mp3',
    'Kiss and Make Up.mp3',
    'Without Me.mp3',
    'Know Me.mp3',
    'You & Me.mp3',
    'Doin Time.mp3',
    'Perfect Night.mp3',
    'Think About Us.mp3',
    'Wasabi.mp3',
    'ILLELLA.mp3',
    'Know Me Too Well.mp3',
    'Drivers license.mp3',
    'Happier.mp3',
    'Love is embarrassing.mp3',
    'At My Worst.mp3',
    'Because i liked a boy.mp3',
    'Dancing With Your Ghost.mp3',
    'Older.mp3',
    'Señorita.mp3',
    'Snowman.mp3',
    'Still With You.mp3',
    'Sweet.mp3',
    'Kill Bill.mp3',
    'London Boy.mp3',
    'Sweet Nothing.mp3',
    'In Your Eyes.mp3',
    'One Of The Girls.mp3',
    'So Tender.mp',
    // Add more song paths here
];

// Get references to the audio player and the playlist
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

// Function to create the playlist
function createPlaylist() {
    songs.forEach((song, index) => {
        // Create a list item for each song
        const listItem = document.createElement('li');
        listItem.textContent = `Song ${index + 1}`;
        
        // When the list item is clicked, play the corresponding song
        listItem.addEventListener('click', () => {
            audioPlayer.src = song;
            audioPlayer.play();
        });

        // Add the list item to the playlist
        playlist.appendChild(listItem);
    });
}

// Initialize the playlist on page load
window.addEventListener('load', createPlaylist);*/


document.addEventListener('DOMContentLoaded', () => {   //dom,click
    // List of MP3 files
    // const songs = [
    //     'Off The Record.mp3',
    //     'Bloodline.mp3',
    //     'Supernatural.mp3',
    //     'Side To Side.mp3',
    //     'Pookie.mp3',
    //     'BLUE.mp3',
    //     'LAMOUR DE MA VIE.mp3',
    //     'Havana.mp3',
    //     'Shameless.mp3',
    //     'I Dont Think That I Like Her.mp3',
    //     'We Don\'t Talk Anymore.mp3',
    //     'When I Get Old.mp3',
    //     'Heather.mp3',
    //     'double take.mp3',
    //     'Diet Mountain Dew.mp3',
    //     'Need To Know.mp3',
    //     'Woman.mp3',
    //     'You Right.mp3',
    //     'Drive Thru.mp3',
    //     'Kiss and Make Up.mp3',
    //     'Without Me.mp3',
    //     'Know Me.mp3',
    //     'You & Me.mp3',
    //     'Doin Time.mp3',
    //     'Perfect Night.mp3',
    //     'Think About Us.mp3',
    //     'Wasabi.mp3',
    //     'ILLELLA.mp3',
    //     'Know Me Too Well.mp3',
    //     'Drivers license.mp3',
    //     'Happier.mp3',
    //     'Love is embarrassing.mp3',
    //     'At My Worst.mp3',
    //     'Because i liked a boy.mp3',
    //     'Dancing With Your Ghost.mp3',
    //     'Older.mp3',
    //     'Señorita.mp3',
    //     'Snowman.mp3',
    //     'Still With You.mp3',
    //     'Sweet.mp3',
    //     'Kill Bill.mp3',
    //     'London Boy.mp3',
    //     'Sweet Nothing.mp3',
    //     'In Your Eyes.mp3',
    //     'One Of The Girls.mp3',
    //     'So Tender.mp',
        // Add more song paths here
    //];
    
    const songs = [
        'D:\Spotify_Clone\Songs',
        // 'https://open.spotify.com/search/rockstar',
        
        // Add more songs
    ];
    console.log(songs)
    // Get references to the audio player and the playlist
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');

    // Function to create the playlist
    function createPlaylist() {
        songs.forEach((song, index) => {
            // Create a list item for each song
            const listItem = document.createElement('li');
            listItem.textContent = `Song ${index + 1}`;

            // When the list item is clicked, play the corresponding song
            listItem.addEventListener('click', () => {
                audioPlayer.src = song;
                audioPlayer.play();
            });

            // Add the list item to the playlist
            playlist.appendChild(listItem);
        });
    }

    // Initialize the playlist
    createPlaylist();
});

