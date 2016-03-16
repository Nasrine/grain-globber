var $h1 = $('h1');

$h1.html('Grain globber');
$ul.addClass ('grains-list');
var $ul = $('ul');

$h1.html('Grain globber!');
$ul.addClass('grains');

dinos.forEach(function (grain){
  var $li = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $h2.html(grain.name);
  $img.attr('src', 'images' + grain.img);
  $p.html(grain.desc);

  $ul.append($li);
  $li.append($h2, $img, $p);
  $p.append($p);
}
  );
