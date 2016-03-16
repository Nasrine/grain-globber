var $ul = $('ul');

$ul.addClass('grains');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $h2.html(grain.name);
  $img.attr('src', 'images/' + grain.img);
  $p.html(grain.desc);

  $ul.append($li);
  $li.append($h2, $img, $p);
  $p.append($p);
});
