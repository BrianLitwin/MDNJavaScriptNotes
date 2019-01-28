https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

HTML (Hypertext Markup Language) is not a programming language;
it is a markup language used to tell your browser how to structure the web pages you visit

HTML consists of a series of elements, which you use to enclose, wrap, or mark up different 
parts of the content to make it appear or act a certain way. 

The main parts of an element are:

1) The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. 
This states where the element begins or starts to take effect — in this case where the start of the paragraph is.
2) The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. 
This states where the element ends — in this case where the end of the paragraph is.
Failing to include a closing tag is a common beginner error and can lead to strange results.
3) The content: This is the content of the element, which in this case is just text.
4) The element: The opening tag plus the closing tag plus the content equals the element.

There are two important categories of elements in HTML which you should know about. They are block-level elements and inline elements.

2) Block-level elements form a visible block on a page — they will appear on a new line from whatever content went before it, and any 
content that goes after it will also appear on a new line. Block-level elements tend to be structural elements on the page that represent,
for example, paragraphs, lists, navigation menus, footers, etc. A block-level element wouldn't be nested inside an inline element, but it 
might be nested inside another block-level element. 
2) Inline elements are those that are contained within block-level elements and surround 
only small parts of the document’s content, not entire paragraphs and groupings of content. An inline element will not cause a new line 
to appear in the document; they would normally appear inside a paragraph of text, for example an a element (hyperlink) or emphasis 
elements such as em or strong.


#### Attributes 

Attributes contain extra information about the element which you don't want to appear in the actual content. 

An attribute should have:
1) A space between it and the element name (or the previous attribute, if the element already has one or more attributes.)
2) The attribute name, followed by an equals sign.
3) An attribute value, with opening and closing quote marks wrapped around it.

#### Boolean Attributes 
Boolean attributes generally have one value, which is the same as the attribute name, eg 'disabled="disabled"' is 
the same as "disabled" 


* `<!DOCTYPE html>` - just include it 
* `<html></html>` - This element wraps all the content on the entire page, and is sometimes known as the root element.
*`<head></head>` - This element acts as a container for all the stuff you want to include on the HTML 
page that isn't the content you are showing to your page's viewers. This includes things like keywords 
and a page description that you want to appear in search results, CSS to style our content, character set 
declarations, and more
* `<meta charset="utf-8">` - just include it 
* `<title></title>` - This sets the title of your page, which is the title that appears in the browser tab the page is loaded in, 
and is used to describe the page when you bookmark/favorite it.
* `<body></body>` This contains all the content that you want to show to web users when they visit your page, whether that's text,
images, videos, games, playable audio tracks, or whatever else.


Questions: 
What is HTML? 
it is a markup language used to tell your browser how to structure the web pages you visit

HTML consists of... 
HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of the content to make it appear or act a certain way.



