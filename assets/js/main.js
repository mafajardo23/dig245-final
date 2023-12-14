document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('popupClosed')) {
    openPopup();
    }
});

    function openPopup() {
    document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
    document.getElementById('popup').style.display = 'none';
    localStorage.setItem('popupClosed', 'true');
    }

    function openStoredMessage() {
        const originalMessage = `❅ The spirit of christmas has been completly changed. The focus has shifted from being with family and sharing special moments to gift-giving and how that measures the amount of love one person has towards the other. Advent calendars were invented as a way to countdown the days until christmas. However, in the 1950s they started putting gifts and chocolates each day so that each individual would look forward to a reward. The advent calendar tells the same story as the holiday of christmas. This is why its so important to shift back and celebrate the true meaning of christmas. We hope this calendar can help you achieve this. Click on each day to reveal the prompt for each day but keep in mind you will only be able to open the days that have passed or the current day. ❆ `;
    
        document.querySelector('.popup-message .message-text').textContent = originalMessage;
        document.getElementById('popup').style.display = 'block';
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        if (!localStorage.getItem('popupClosed')) {
            openPopup();
        }
    });
    
    function openPopup() {
        if (!localStorage.getItem('clickedDays')) {
            openStoredMessage();
            localStorage.setItem('popupClosed', 'true');
        } else {
            document.getElementById('popup').style.display = 'block';
        }
    }
    
    document.querySelector('.about').addEventListener('click', function() {
        openStoredMessage();
    });

const dayMessages = {
    '1': 'December 1st: Make sure your space is decorated for christmas, if not, do it!',
    '2': 'December 2nd: Watch the movie Elf.',
    '3': 'December 3rd: Call your Grandma.',
    '4': 'December 4th: Make someone in your family a stocking.',
    '5': 'December 5th: Make a christmas drawing for someone.',
    '6': 'December 6th: Bake christmas cookies.',
    '7': 'December 7th: Lookup the history of advent calendars.',
    '8': 'December 8th: Build a gingerbread house.',
    '9': 'December 9th: Make an ornament to decorate the christmas tree.',
    '10': 'December 10th: Spend time with your Mom.',
    '11': 'December 11th: Drink eggnog with someone.',
    '12': 'December 12th: Learn about St. Nicholas.',
    '13': 'December 13th: Write a thank you letter to someone in your life.',
    '14': 'December 14th: Make christmas playlist.',
    '15': 'December 15th: Watch Home Alone.',
    '16': 'December 16th: Catch up with an old friend.',
    '17': 'December 17th: Watch Die Hard.',
    '18': 'December 18th: Drive around your neighborhood with someone looking at decorated houses.',
    '19': 'December 19th: Make a cup of hot cocoa.',
    '20': 'December 20th: Have a friends holiday dinner.',
    '21': 'December 21st: Gather a group of people and create each other’s santa letters.',
    '22': 'December 22nd: Visit a christmas market or fair.',
    '23': 'December 23rd: Eat cookies and milk.',
    '24': 'December 24th: Make a list of all the things you’re grateful for.',
    '25': 'December 25th: Reflect on past christmas days.',
    '26': 'December 26th: Holiday Karaoke!',
    '27': 'December 27th: Christmas Star-Gaze.',
    '28': 'December 28th: Do something kind for someone.',
    '29': 'December 29th: Create a list of new year’s resolutions.',
    '30': 'December 30th: Reflect on the true meaning of Christmas.',
    '31': 'December 31st: Celebrate the New Year with your loved ones.',
};

function showMessage(element) {
    const dayNumber = element.querySelector('.calendar-day-num').textContent;
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    if (dayNumber <= currentDay) {
        document.querySelector('.popup-message .message-text').textContent = dayMessages[dayNumber];
        document.querySelector('.popup').style.display = 'block';

        let clickedDays = JSON.parse(localStorage.getItem('clickedDays')) || [];

        if (!clickedDays.includes(dayNumber)) {
            clickedDays.push(dayNumber);
            localStorage.setItem('clickedDays', JSON.stringify(clickedDays));
        }

        element.style.borderColor = '#AE2C1E';
        element.style.borderWidth = '6px';

        highlightClickedDays();

        document.querySelector('.close').onclick = function() {
            document.querySelector('.popup').style.display = 'none';
        };
    } else {
        alert('Sorry! You can only open days up to the current date.');
    }
}

function highlightClickedDays() {
    const clickedDays = JSON.parse(localStorage.getItem('clickedDays')) || [];
    const dayElements = document.querySelectorAll('.calendar-day-num');

    dayElements.forEach(function (dayElement) {
        const dayNumber = dayElement.textContent;
        const parentDayElement = dayElement.parentNode.parentNode;

        if (clickedDays.includes(dayNumber)) {
            parentDayElement.style.borderColor = '#AE2C1E';
            parentDayElement.style.borderWidth = '6px';
        }
    });
}

window.onload = function() {
    const clickedDay = localStorage.getItem('clickedDay');
    if (clickedDay) {
        const dayElements = document.querySelectorAll('.calendar-day-num');
        dayElements.forEach(function(dayElement) {
            if (dayElement.textContent === clickedDay) {
                const parentDayElement = dayElement.parentNode.parentNode;
                parentDayElement.style.borderColor = '#AE2C1E';
                parentDayElement.style.borderWidth = '6px';
            }
        });
    }

    highlightClickedDays();
};

let audio = document.getElementById("myAudio");

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
  } else {
    audio.pause();
  }
}

