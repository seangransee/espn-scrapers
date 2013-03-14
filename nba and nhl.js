var jq = document.createElement('script');
jq.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

function getScores() {
  var year = $(".tablesm option:selected").text();
  $('.evenrow, .oddrow').each(function() {
    if ($(this).find('td').eq(2).text() != "Postponed") {
      var line = $(this);

      var date = $(line).find("td").first().text();

      var vsat = $(line).find("td").eq(1).find(".game-status").text();
      var homeoraway;
      if(vsat === "vs") {
        homeoraway = "Home";
      } else {
        homeoraway = "Away";
      }

      var opponent = $(line).find("td").eq(1).find(".team-name").text();

      var winloss = $(line).find("td").eq(2).find(".game-status").text();
      var scores = $(line).find("td").eq(2).find(".score").text().split("-");
      var winnerscore = scores[0];
      var loserscore = scores[1].split(" ")[0];
      var teamscore;
      var opponentscore;

      if(winloss === "W"){
        teamscore = winnerscore;
        opponentscore = loserscore;
      } else {
        teamscore = loserscore;
        opponentscore = winnerscore;
      }

      var toprint = year + "\t" +
                    date + "\t" +
                    homeoraway + "\t" +
                    opponent + "\t" +
                    teamscore + "\t" +
                    opponentscore + "<br />";

      document.write(toprint);
    }

  });
}

setTimeout(getScores, 1000);