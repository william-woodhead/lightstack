export default function transformStoryblokImage(image, option) {
  var imageService = "//img2.storyblok.com/";
  var path = image.replace("//a.storyblok.com", "");
  return imageService + option + path;
}
