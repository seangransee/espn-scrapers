var jq = document.createElement('script');
jq.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

i = 0;

function getScores(rows) {
  var year = $(".floatleft select option:selected").text();
  $(rows).each(function() {
    var line = $(this);

    if($(line).find("td").eq(1).text() != "BYE WEEK")
    {

    var date = $(line).find("td").eq(1).text();

    var vsat = $(line).find("td").eq(2).find(".game-status").text();
    var homeoraway;
    if(vsat === "vs") {
      homeoraway = "Home";
    } else {
      homeoraway = "Away";
    }

    var opponent = $(line).find("td").eq(2).find(".team-name a").text();

    var winloss = $(line).find("td").eq(3).find(".game-status").text();
    var scores = $(line).find("td").eq(3).find(".score").text().split("-");
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

    if(i < 16){
      document.write(toprint);
    }
    i++;
  }

  });
}

function getNFLScores() {

  $('.stathead').each(function (){

    if($(this).text().split(' ')[1] === "Regular") {
      var rows = $(this).nextAll(".oddrow, .evenrow");
      getScores(rows);
    }

  });

}

setTimeout(getNFLScores, 1000);


