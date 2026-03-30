import React from "react";
import PopconfirmElyTypes from "../PopconfirmElyTypes/PopconfirmElyTypes";
import { t } from "i18next";

const DescriptionProperties = () => {}

export const BackgroundColor = <PopconfirmElyTypes titleName={'Background Color'}
descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"backgroundColor"</span> property in CSS is used to set the background color of an element. This color fills the entire element, including its padding and border (if any).</p>
</>
}
descriptionArTitle=
{
<>
    <p>يتم استخدام خاصية <span style={{fontWeight:"bold"}}>'Background Color'</span> في CSS لتعيين لون الخلفية لعنصر ما. يملأ هذا اللون العنصر بأكمله، بما في ذلك الحشوة والحدود (إن وجدت).</p>
</>
}/>

export const BackgroundImage = <PopconfirmElyTypes titleName={'Background Image'}
descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"background-image"</span> property in CSS is used to set an image as the background of an element. You can specify the image URL, and it will be displayed behind the content of the element.</p>
    <p>url("Your Link")</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>'Background Image'</span> في CSS تُستخدم لتعيين صورة كخلفية لعنصر. يمكنك تحديد عنوان URL للصورة، وستُعرض خلف محتوى العنصر.</p>
</>
}/>

export const BackgroundRepeat = <PopconfirmElyTypes titleName={'Background Repeat'}
descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"background-repeat"</span> feature in CSS allows you to control how a background image is repeated (or not repeated) within an element</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>'Background Repeat'</span> في CSS تسمح لك بالتحكم في كيفية تكرار صورة الخلفية (أو عدم تكرارها) داخل عنصر.</p>
</>
}/>

export const BackgroundPosition = <PopconfirmElyTypes titleName={'Background Position'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"background-position"</span> feature in CSS specifies the initial position of a background image within its container. It controls where the background image is placed relative to the element's padding box. You can define the position using keywords like top, bottom, left, right, center, or precise measurements like percentages or pixels. This property allows you to precisely control how the background image is aligned within its element.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"background-position"</span> في CSS تحدد الموضع الأولي لصورة الخلفية داخل عنصرها الواقع. تتحكم في مكان وضع صورة الخلفية بالنسبة إلى صندوق الحشو للعنصر. يمكنك تعريف الموضع باستخدام كلمات مثل أعلى (top)، أسفل (bottom)، يسار (left)، يمين (right)، وسط (center)، أو قياسات دقيقة مثل النسب المئوية أو البكسلات. تسمح هذه الخاصية لك بالتحكم الدقيق في كيفية توزيع صورة الخلفية داخل عنصرها.</p>
</>
}/>

export const BackgroundAttachment = <PopconfirmElyTypes titleName={'Background Attachment'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Background Attachment:"</span> Controls how a background image behaves when scrolling the page. Options include:</p>
    <p><span style={{fontWeight:"bold"}}>"scroll:"</span> The background image scrolls with the page</p>
    <p><span style={{fontWeight:"bold"}}>"fixed:"</span> The background image stays fixed in place, even when scrolling.</p>
    <p><span style={{fontWeight:"bold"}}>"local:"</span> The background image scrolls with the element's contents</p>
</>
}
descriptionArTitle={
<>
    <p><span style={{fontWeight:"bold"}}>"Background Attachment:"</span>: تحكم في كيفية سلوك الصورة الخلفية عند التمرير على الصفحة. الخيارات تشمل</p>
    <p><span style={{fontWeight:"bold"}}>scroll:</span> تتحرك صورة الخلفية مع الصفحة</p>
    <p><span style={{fontWeight:"bold"}}>fixed:</span> تظل صورة الخلفية ثابتة في مكانها، حتى عند التمرير</p>
    <p><span style={{fontWeight:"bold"}}>local:</span> تتحرك صورة الخلفية مع محتويات العنصر</p>
</>

}/>

export const BackgroundSize = <PopconfirmElyTypes titleName={'Background Size'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"background-size"</span> feature in CSS controls how a background image is sized or scaled within its container. It determines whether the image should cover the entire container, be contained within it, or be displayed at a specific size. This property is crucial for controlling the appearance of background images, ensuring they fit appropriately based on design requirements and responsiveness</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>background-size</span> في CSS تتحكم في كيفية حجم الصورة الخلفية أو قياسها داخل الحاوية الخاصة بها. تحدد ما إذا كانت الصورة يجب أن تغطي الحاوية بالكامل، أو تكون محتواة داخلها، أو تُعرض بحجم محدد. هذه الخاصية ضرورية للتحكم في مظهر الصور الخلفية، وضمان تناسبها بشكل مناسب بناءً على متطلبات التصميم والاستجابة.</p>
</>
}/>
/*****************************************************************************/
export const Width = <PopconfirmElyTypes titleName={'Width'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Width"</span> feature in CSS defines the horizontal size of an element on a web page. It specifies how wide the element should be relative to its containing element or the viewport if no container is specified. This property is commonly used to control the size of elements like s, images, and other HTML elements</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"Width"</span> في CSS تحدد الحجم الأفقي للعنصر على صفحة الويب. تحدد هذه الخاصية مدى عرض العنصر بالنسبة إلى العنصر الحاوي له أو نافذة العرض إذا لم يتم تحديد حاوية. تُستخدم هذه الخاصية بشكل شائع للتحكم في حجم العناصر مثل s والصور والعناصر الأخرى في HTML.</p>
</>
}/>

export const Height = <PopconfirmElyTypes titleName={'Height'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Height"</span> feature in CSS determines the vertical size of an element on a web page. It allows you to specify how tall an element should be, either in absolute units like pixels (px) or relative units such as percentages (%). Setting the height can control the space an element occupies within its parent container, affecting layout and positioning.</p>
</>
}
descriptionArTitle=
{
<>
   <p>ميزة <span style={{fontWeight:"bold"}}>"Height"</span> في CSS تحدد الحجم العمودي لعنصر على صفحة الويب. تتيح لك تحديد مدى ارتفاع العنصر، إما بوحدات مطلقة مثل البيكسل أو بوحدات نسبية مثل النسب المئوية. يمكن لتحديد الارتفاع التحكم في المساحة التي يشغلها العنصر داخل حاويته الأم، مما يؤثر على التخطيط والتموضع.</p>
</>
}/>

export const MaximumWidth = <PopconfirmElyTypes titleName={'Maximum Width'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Maximum Width"</span> feature in CSS sets the maximum width that an element can have. It restricts the element from expanding beyond this specified width, even if more content is added. This is useful for ensuring that content remains readable and the layout stays consistent, especially on larger screens where content width might otherwise become too wide.</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"Maximum Width"</span> في CSS تحدد الحد الأقصى للعرض الذي يمكن أن يكون عليه العنصر. إنها تقيد العنصر من التوسع إلى ما بعد هذا العرض المحدد، حتى إذا تمت إضافة المزيد من المحتوى. هذا مفيد لضمان بقاء المحتوى قابلاً للقراءة والحفاظ على تناسق التخطيط، خاصة على الشاشات الكبيرة حيث قد يصبح عرض المحتوى واسعًا جدًا.</p>
</>
}/>

export const MinimumWidth = <PopconfirmElyTypes titleName={'Minimum Width'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Minimum Width"</span> feature in CSS specifies the smallest width that an element can shrink to, ensuring that it doesn't become narrower than the specified minimum width. This helps maintain the layout and prevent content from becoming too compressed or difficult to read on smaller screens or when the content is resized dynamically</p>
</>
}
descriptionArTitle=
{
<>
    <p>تحدد خاصية <span style={{fontWeight:"bold"}}>"Minimum Width"</span> في CSS أصغر عرض يمكن أن ينكمش إليه العنصر، مما يضمن عدم انكماشه إلى ما هو أضيق من الحد الأدنى المحدد. يساعد ذلك في الحفاظ على التخطيط ومنع المحتوى من أن يصبح مضغوطًا جدًا أو صعب القراءة على الشاشات الصغيرة أو عند تغيير حجم المحتوى ديناميكيًا</p>
</>
}/>

export const MaximumHeight = <PopconfirmElyTypes titleName={'Maximum Height'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Maximum Height"</span> feature in CSS allows you to set the maximum height that an element can reach, preventing it from growing taller than the specified value. This is useful when you want to limit the size of an element dynamically based on content or layout constraints, ensuring it doesn't exceed a certain height regardless of its content size.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Maximum Height"</span> في CSS تُمكّنك من تعيين الحد الأقصى للارتفاع الذي يمكن للعنصر أن يصل إليه، مما يمنعه من النمو إلى أعلى من القيمة المحددة. يكون هذا مفيدًا عندما ترغب في تقييد حجم عنصر بناءً على الحاجة أو القيود التصميمية، مضمنًا أنه لا يتجاوز ارتفاعًا معينًا بغض النظر عن حجم محتواه.</p>
</>
}/>

export const MinimumHeight = <PopconfirmElyTypes titleName={'Minimum Height'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Minimum Height"</span> feature in CSS specifies the minimum height that an element should have. It ensures that even if the content inside the element is smaller than this minimum height, the element will still be rendered at least as tall as the specified minimum height. This helps in controlling the layout and ensuring elements have a consistent minimum size, regardless of their content.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Minimum Height"</span> في CSS تحدد الارتفاع الأدنى الذي يجب أن يكون للعنصر. تضمن أنه حتى لو كان المحتوى داخل العنصر أصغر من هذا الارتفاع الأدنى، سيتم عرض العنصر على الأقل بارتفاع يساوي الحد الأدنى المحدد. يساعد هذا في التحكم في التخطيط وضمان أن للعناصر حجم أدنى موحد، بغض النظر عن محتواها.</p>
</>
}/>
/*****************************************************************************/
export const FontColor = <PopconfirmElyTypes titleName={'Font Color'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Color"</span> In CSS, the color property is used to define the color of text content within an element. You can specify colors using keywords (like red, blue, black) or using hexadecimal, RGB, RGBA, HSL, or HSLA color values. This property allows you to customize the appearance of text on your webpage, making it visually interesting and readable</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Color"</span> في CSS، تُستخدم خاصية اللون لتعريف لون محتوى النص داخل عنصر معين. يمكنك تحديد الألوان باستخدام الكلمات الرئيسية (مثل الأحمر، الأزرق، الأسود) أو باستخدام قيم الألوان الست عشرية، RGB، RGBA، HSL، أو HSLA. تسمح هذه الخاصية لك بتخصيص مظهر النص على صفحتك الإلكترونية، مما يجعلها جذابة بصريًا وسهلة القراءة</p>
</>
}/>

export const FontFamily = <PopconfirmElyTypes titleName={'Font Family'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Family"</span> Specifies the typeface or font family that should be used for text content. It allows designers to choose from a list of fonts available on the user's system or define a specific font stack for text rendering, ensuring consistent typography across different devices and platforms.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Family"</span> تحدد نوع الخط أو أسرة الخطوط التي يجب استخدامها لمحتوى النص. تسمح للمصممين باختيار من قائمة الخطوط المتاحة على نظام المستخدم أو تحديد مجموعة محددة من الخطوط لعرض النص، مما يضمن توحيد الطباعة عبر أجهزة مختلفة ومنصات متعددة.</p>
</>
}/>

export const FontSize = <PopconfirmElyTypes titleName={'Font Size'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Size"</span> The font size property in CSS determines the size of text displayed on a web page. It can be specified in various units like pixels (px), em, rem, percentages (%), or keywords (e.g., small, medium, large). Larger values make the text bigger, while smaller values make it smaller</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Size"</span> خاصية حجم الخط في CSS تحدد حجم النص المعروض على صفحة الويب. يمكن تحديدها بوحدات مختلفة مثل البكسل (px)، em، rem، النسب المئوية (%)، أو كلمات مفتاحية (مثل صغير، متوسط، كبير). القيم الأكبر تجعل النص أكبر، بينما القيم الأصغر تجعله أصغر</p>
</>
}/>

export const FontWeightDes = <PopconfirmElyTypes titleName={'Font Weight'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Weight"</span> in CSS determines how thick or thin characters in text should be displayed. It ranges from normal (default) to bold</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Font Weight"</span> في CSS يحدد كيفية عرض الأحرف سماكة أو رقة. يتراوح بين عادي (الافتراضي) إلى عريض</p>
</>
}/>

export const LineHeightDes = <PopconfirmElyTypes titleName={'Line Height'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Line height"</span> in CSS determines the vertical spacing between lines of text within an element. It can be set as a unitless number, which multiplies the current font size to calculate the spacing, or it can be set using specific length units. A higher line height value means more space between lines, while a lower value means less space, affecting the overall readability and appearance of text on a webpage.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Line height"</span> في CSS يُحدد التباعد الرأسي بين أسطر النص داخل عنصر معين. يمكن تعيينه كرقم بدون وحدات، حيث يُضرب حجم الخط الحالي لحساب التباعد، أو يمكن تعيينه باستخدام وحدات الطول المحددة. قيمة ارتفاع السطر الأعلى تعني مزيدًا من المسافة بين الأسطر، بينما تعني القيمة الأقل مسافة أقل، مما يؤثر على قراءة النص ومظهره العام على صفحة الويب.</p>
</>
}/>

export const TextAlignDes = <PopconfirmElyTypes titleName={'Text Align'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"text-align"</span> property in CSS controls the horizontal alignment of text within its containing element. It can align text to the left, right, center, or justify it (evenly aligns lines). For example:</p>
    <p><span style={{fontWeight:"bold"}}>left:</span> aligns text to the left.</p>
    <p><span style={{fontWeight:"bold"}}>right:</span> aligns text to the right.</p>
    <p><span style={{fontWeight:"bold"}}>center:</span> centers text horizontally.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>خاصية "text-align"</span> في CSS تتحكم في محاذاة النص أفقيا داخل عنصره الأساسي. يمكن أن تحاذي النص إلى اليسار، اليمين، الوسط، أو تبرره (محاذاة متساوية للأسطر). على سبيل المثال:</p>
    <p><span style={{fontWeight:"bold"}}>left:</span> تحاذي النص إلى اليسار.</p>
    <p><span style={{fontWeight:"bold"}}>right:</span> تحاذي النص إلى اليمين.</p>
    <p><span style={{fontWeight:"bold"}}>center:</span> تحاذي النص في الوسط أفقيا.</p>
</>
}/>

export const FontStyleDes = <PopconfirmElyTypes titleName={'Font Style'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Font Style"</span> feature in CSS allows you to specify whether the text should be displayed in a normal, italic, or oblique style.</p>
    <p><span style={{fontWeight:"bold"}}>Normal:</span> The default style of the font.</p>
    <p><span style={{fontWeight:"bold"}}>Italic:</span> Text is displayed in a cursive, slanted style.</p>
    <p><span style={{fontWeight:"bold"}}>Oblique:</span> Similar to italic, but the slant is less defined and more of a skew.</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"Font Style"</span> في CSS تتيح لك تحديد ما إذا كان يجب عرض النص بنمط عادي، مائل، أو مائل زائد.</p>
    <p><span style={{fontWeight:"bold"}}>Normal:</span> النمط الافتراضي للخط.</p>
    <p><span style={{fontWeight:"bold"}}>Italic:</span> يتم عرض النص بنمط مائل مائل.</p>
    <p><span style={{fontWeight:"bold"}}>Oblique:</span> مشابه للمائل، ولكن الانحدار أقل تحديدًا وأكثر إمالة.</p>
</>
}/>

export const LetterSpacingDes = <PopconfirmElyTypes titleName={'Letter Spacing'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Letter Spacing"</span> in CSS determines the amount of space between characters in a text. It can increase or decrease the space between letters to affect the overall appearance of the text. By adjusting this property, you can control the spacing between each letter in a word or a block of text, enhancing readability or achieving a specific visual effect.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Letter Spacing"</span> في CSS يحدد كمية الفراغ بين الأحرف في النص. يمكنه زيادة أو تقليل المسافة بين الحروف للتأثير على المظهر العام للنص. من خلال ضبط هذه الخاصية، يمكنك التحكم في المسافة بين كل حرف في كلمة أو مجموعة نصية، مما يعزز القراءة أو يحقق تأثيرًا بصريًا محددًا.</p>
</>
}/>

export const WordBreakDes = <PopconfirmElyTypes titleName={'Word Break'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"word-break"</span> property in CSS determines how words should break when reaching the end of a line. It's particularly useful for handling long words or preventing overflow in text content. There are two main options:</p>
    <p><span style={{fontWeight:"bold"}}>Normal:</span> Allows words to break at the end of a line to prevent overflow. It respects language-specific word breaking rules.</p>
    <p><span style={{fontWeight:"bold"}}>Break-all:</span> Allows words to break at any character, which can be useful for non-Latin languages or when dealing with long URLs or code snippets</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"word-break"</span> خاصية في CSS تحدد كيفية كسر الكلمات عند الوصول إلى نهاية السطر. تُستخدم بشكل خاص للتعامل مع الكلمات الطويلة أو لمنع تجاوز المحتوى النصي. تتضمن هذه الخاصية خيارين رئيسيين:</p>
    <p><span style={{fontWeight:"bold"}}>Normal:</span> يسمح بكسر الكلمات في نهاية السطر لمنع التجاوز. يحترم قواعد كسر الكلمات الخاصة باللغة.</p>
    <p><span style={{fontWeight:"bold"}}>Break-all:</span> يسمح بكسر الكلمات في أي حرف، مما يكون مفيدًا للغات غير اللاتينية أو عند التعامل مع روابط طويلة أو مقاطع الكود.</p>
</>
}/>

export const WhiteSpaceDes = <PopconfirmElyTypes titleName={'White Space'} descriptionEnTitle=
{
<>
    <p>the <span style={{fontWeight:"bold"}}>"White Space"</span> property controls how white spaces inside an element are handled. It determines whether multiple spaces are collapsed into a single space or preserved as they are, and how line breaks are treated. This property is useful for controlling text layout and formatting in web pages.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"White Space"</span> تتحكم في كيفية التعامل مع المسافات البيضاء داخل العنصر. تحدد ما إذا كانت المسافات المتعددة تنطمس إلى مسافة واحدة أو تُحتفظ بما هي عليه، وكيفية معاملة الفواصل السطرية. تعد هذه الخاصية مفيدة للتحكم في تخطيط النصوص والتنسيق في صفحات الويب.</p>
</>
}/>

export const WordSpacingDes = <PopconfirmElyTypes titleName={'Word Spacing'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Word spacing"</span> in CSS controls the amount of space between words in a block of text. By adjusting this property, you can increase or decrease the space between words to improve readability or achieve a specific visual effect in your text layout."</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Word spacing"</span> في CSS يتحكم في كمية المسافة بين الكلمات في كتلة من النص. من خلال ضبط هذه الخاصية، يمكنك زيادة أو تقليل المسافة بين الكلمات لتحسين القراءة أو تحقيق تأثير بصري معين في تخطيط النصوص."</p>
</>
}/>

export const WordWrapDes = <PopconfirmElyTypes titleName={'Word Wrap'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Word Wrap"</span> feature in CSS controls whether the browser should break long words and wrap them onto the next line if they exceed the available width of their container. It ensures that words do not overflow their container's boundaries, improving readability and layout on web pages</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"Word Wrap"</span> في CSS تتحكم في ما إذا كان يجب على المتصفح كسر الكلمات الطويلة ولفها إلى السطر التالي إذا تجاوزت العرض المتاح لحاويتها. تضمن أن الكلمات لا تتجاوز حدود حاويتها، مما يعزز قراءة النصوص وتحسين تخطيط الصفحات على الويب.</p>  
</>
}/>

export const TextOverflowDes = <PopconfirmElyTypes titleName={'Text Overflow'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Text Overflow"</span> in CSS controls what happens when text overflows its containing element. It provides options for handling this situation, such as clipping the text, showing an ellipsis (...) to indicate truncated text, or displaying a custom string when overflow occurs. It's useful for ensuring text content remains readable and visually controlled within its designated space.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Text Overflow"</span> في CSS يتحكم في ما يحدث عندما يتجاوز النص عنصره الأساسي. يوفر خيارات للتعامل مع هذا الوضع، مثل قص النص، عرض نقطتين (...) للدلالة على النص المقتوم، أو عرض سلسلة مخصصة عند حدوث التجاوز. هذا مفيد لضمان بقاء محتوى النص قابل للقراءة ومرئياً بشكل متحكم داخل الفضاء المخصص له.</p>
</>
}/>
/*****************************************************************************/

export const MarginDes = <PopconfirmElyTypes titleName={'Margin'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Margin"</span> In CSS, margin refers to the space around an element. It creates distance between the element's border and surrounding elements. You can set margins for all sides (top, right, bottom, left) inidually or collectively using shorthand notation. Negative margins can be used to overlap elements.</p>
    <p>Example:10px ,20px ,30% , 20%</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>الهامش (Margin)</span> في CSS، يشير الهامش إلى المسافة حول العنصر. يُنشئ مسافة بين حدود العنصر والعناصر المحيطة به. يمكنك تعيين هوامش لكل جانب (أعلى، يمين، أسفل، يسار) بشكل فردي أو جماعي باستخدام النشانة الاختصارية. يمكن استخدام الهوامش السلبية لتراكم العناصر.</p>
    <p><span style={{fontWeight:"bold"}}>مثال</span>: 10px ,20px ,30% , 20%</p>
</>
}/>

export const MarginTopDes = <PopconfirmElyTypes titleName={'Margin Top'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Margin Top"</span> in CSS is used to create space outside the top edge of an element's border. It controls the distance between the top edge of the element and its neighboring elements</p>
    <p>Example:10px ,20px ,30% , 20%</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Margin Top"</span> في CSS يُستخدم لإنشاء مسافة خارج حافة العنصر من الأعلى. يتحكم في المسافة بين حافة العنصر العلوية وعناصره المجاورة</p>
    <p><span style={{fontWeight:"bold"}}>مثال</span>: 10px ,20px ,30% , 20%</p>
</>
}/>

export const MarginBottomDes = <PopconfirmElyTypes titleName={'Margin Bottom'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Margin Bottom"</span> property in CSS sets the space (margin) outside the bottom edge of an element. This space separates the element from the next element below it, helping to control the layout and spacing of your web page.</p>
    <p>Example:10px ,20px ,30% , 20%</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Margin Bottom(الهامش السفلي)"</span> في CSS تحدد المسافة (الهامش) خارج الحافة السفلية لعنصر ما. هذه المسافة تفصل العنصر عن العنصر التالي أسفله، مما يساعد في التحكم في تخطيط وتباعد صفحتك الإلكترونية.</p>
    <p><span style={{fontWeight:"bold"}}>مثال</span>: 10px ,20px ,30% , 20%</p>
</>
}/>

export const MarginRightDes = <PopconfirmElyTypes titleName={'Margin Right'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Margin Right"</span> property in CSS sets the space outside the right edge of an element. It's a way to control the amount of space between the right side of the element and the next element. This can help you adjust the layout and spacing of elements on a webpage.</p>
    <p>Example:10px ,20px ,30% , 20%</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"(Margin Right)الهامش الأيمن"</span> في CSS تحدد المسافة خارج حافة اليمين للعنصر. إنها طريقة للتحكم في كمية الفراغ بين الجانب الأيمن للعنصر والعنصر التالي. يمكن أن تساعدك في ضبط تخطيط وتباعد العناصر على صفحة الويب.</p>
    <p><span style={{fontWeight:"bold"}}>مثال</span>: 10px ,20px ,30% , 20%</p>
</>
}/>

export const MarginLeftDes = <PopconfirmElyTypes titleName={'Margin Left'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Margin Left"</span> property in CSS sets the amount of space between the left edge of an element and the adjacent element or container. This property helps control the layout and spacing of elements on a web page.</p>
    <p>Example:10px ,20px ,30% , 20%</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"(Margin Left)الهامش الأيسر"</span> في CSS تحدد كمية المسافة بين الحافة اليسرى للعنصر والعنصر المجاور أو الحاوية. تساعد هذه الخاصية في التحكم في التخطيط والتباعد بين العناصر على صفحة الويب.</p>
    <p><span style={{fontWeight:"bold"}}>مثال</span>: 10px ,20px ,30% , 20%</p>
</>
}/>
/*****************************************************************************/
export const PositionDes = <PopconfirmElyTypes titleName={'Position'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Position"</span> property in CSS specifies how an element is positioned in a document. It determines the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
    <p><span style={{fontWeight:"bold"}}>static:</span> The default value. Elements are positioned according to the normal flow of the document. Top, right, bottom, and left properties have no effect.</p>
    <p><span style={{fontWeight:"bold"}}>relative:</span> The element is positioned relative to its normal position. The top, right, bottom, and left properties can adjust the element's position without affecting the layout of other elements.</p>
    <p><span style={{fontWeight:"bold"}}>absolute:</span> The element is positioned relative to its nearest positioned ancestor (not static). If there is no such ancestor, it uses the document body, and moves along with page scrolling</p>
    <p><span style={{fontWeight:"bold"}}>fixed:</span> The element is positioned relative to the browser window. It will not move when the page is scrolled.</p>
    <p><span style={{fontWeight:"bold"}}>sticky:</span> The element is treated as relative until its containing block crosses a specified threshold, then it is treated as fixed.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Position"</span> في CSS تحدد كيفية تموضع العنصر في الصفحة. تحدد نوع طريقة التموضع المستخدمة للعنصر (ثابت، نسبي، مطلق، ثابت مع التمرير، أو لزج).</p>
    <p><span style={{fontWeight:"bold"}}>ثابت (static):</span> القيمة الافتراضية. يتم تموضع العناصر وفقاً للتدفق الطبيعي للصفحة. الخصائص العلوية واليمنى والسفلى واليسرى لا تؤثر.</p>
    <p><span style={{fontWeight:"bold"}}>نسبي (relative):</span> يتم تموضع العنصر نسبياً إلى موضعه الطبيعي. يمكن للخصائص العلوية واليمنى والسفلى واليسرى تعديل موضع العنصر دون التأثير على تخطيط العناصر الأخرى.</p>
    <p><span style={{fontWeight:"bold"}}>مطلق (absolute):</span> يتم تموضع العنصر نسبياً إلى أقرب عنصر موضوع (غير ثابت). إذا لم يكن هناك عنصر موضوع كهذا، يستخدم جسم الوثيقة، ويتحرك مع التمرير في الصفحة.</p>
    <p><span style={{fontWeight:"bold"}}>ثابت مع التمرير (fixed):</span> يتم تموضع العنصر نسبياً إلى نافذة المتصفح. لن يتحرك مع تمرير الصفحة.</p>
    <p><span style={{fontWeight:"bold"}}>لزج (sticky):</span> يُعامل العنصر كنسبي حتى يتجاوز كتلته المحيطة عتبة محددة، ثم يُعامل كثابت.</p>
</>
}/>

export const TopDes = <PopconfirmElyTypes titleName={'Top'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Top"</span> property in CSS is used to position an element relative to its nearest positioned ancestor. It moves the element down from the top of its containing element by the specified amount. This property only works if the element's position is set to absolute, relative, fixed, or sticky.</p>
    <p><span style={{fontWeight:"bold"}}>Example:</span> position: absolute; /* or relative, fixed, sticky */
    top: 20px;</p>
</>
}
descriptionArTitle=
{
<>
    <p>الخاصية <span style={{fontWeight:"bold"}}>"الأعلى (Top)"</span> في CSS تُستخدم لتمرير العنصر بالنسبة لأقرب عنصر موضوع. تنقل العنصر لأسفل من أعلى العنصر الذي يحتويه بالمقدار المحدد. تعمل هذه الخاصية فقط إذا كانت خاصية موضع العنصر مضبوطة على absolute, relative, fixed, أو sticky.</p>
    <p><span style={{fontWeight:"bold"}}>مثال:</span> position: absolute; /* أو relative, fixed, sticky */
    top: 20px;</p>
</>
}/>

export const RightDes = <PopconfirmElyTypes titleName={'Right'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Right"</span> property in CSS is used to position an element from the right edge of its containing element. It is often used with position properties like absolute or fixed.</p>
    <p><span style={{fontWeight:"bold"}}>Example:</span> position: absolute; /* or relative, fixed, sticky */
    right: 20px;</p>
</>
}
descriptionArTitle=
{
<>
    <p>الخاصية <span style={{fontWeight:"bold"}}>"Right"</span> في CSS تُستخدم لتموضع العنصر من الحافة اليمنى لعنصره الأصل.</p>
    <p><span style={{fontWeight:"bold"}}>مثال:</span> position: absolute; /* أو relative, fixed, sticky */
    right: 20px;</p>
</>
}/>

export const BottomDes = <PopconfirmElyTypes titleName={'Bottom'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Bottom"</span> feature in CSS is used to specify the vertical position of a positioned element. It sets the distance between the bottom edge of the element and the bottom edge of its containing block. This property only works if the element's position property is set to relative, absolute, fixed, or sticky</p>
    <p><span style={{fontWeight:"bold"}}>Example:</span> position: absolute; /* or relative, fixed, sticky */
    bottom: 20px;</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"(Bottom)الأسفل"</span> في CSS تُستخدم لتحديد الوضع الرأسي لعنصر موضوع. تعيّن المسافة بين حافة الأسفل للعنصر وحافة الأسفل لكتلته الحاوِلة. تعمل هذه الخاصية فقط إذا كانت خاصية الوضع للعنصر مضبوطة على القيم relative، absolute، fixed، أو sticky.</p>
    <p><span style={{fontWeight:"bold"}}>مثال:</span> position: absolute; /* أو relative، fixed، sticky */
    bottom: 20px;</p>
</>
}/>

export const LeftDes = <PopconfirmElyTypes titleName={'Left'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Left"</span> feature in CSS specifies the horizontal position of an element. It sets the distance between the element's left edge and the left edge of its containing element. This property only works if the element's position is set to relative, absolute, or fixed.</p>
    <p><span style={{fontWeight:"bold"}}>Example:</span> position: absolute; /* or relative, fixed, sticky */
    left: 20px;</p>
</>
}
descriptionArTitle=
{
<>
    <p>الخاصية <span style={{fontWeight:"bold"}}>"(Left)اليسار"</span> في CSS تحدد الموضع الأفقي للعنصر. تضبط المسافة بين حافة العنصر اليسرى وحافة العنصر الأساسي الذي يحتوي عليه. تعمل هذه الخاصية فقط عندما يكون موضع العنصر محددًا كنسبي، مطلق، أو ثابت.</p>
    <p><span style={{fontWeight:"bold"}}>مثال:</span> position: absolute; /* أو relative, fixed, sticky */
    left: 20px;</p>
</>
}/>
/*****************************************************************************/

export const DisplayDes = <PopconfirmElyTypes titleName={'Display'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Display"</span> feature in CSS determines how an element is displayed on the web page. It controls the layout behavior of an element, such as whether it should be displayed as a block, inline, flex, grid, or none (hidden). For example:</p>
    <p><span style={{fontWeight:"bold"}}>block:</span> The element takes up the full width available, with a new line before and after it.</p>
    <p><span style={{fontWeight:"bold"}}>inline:</span> The element takes up only as much width as necessary, and does not start on a new line.</p>
    <p><span style={{fontWeight:"bold"}}>flex:</span> The element is displayed as a flex container, allowing for flexible layout of child elements.</p>
    <p><span style={{fontWeight:"bold"}}>grid:</span> The element is displayed as a grid container, allowing for grid-based layout of child elements.</p>
    <p><span style={{fontWeight:"bold"}}>none:</span> The element is not displayed at all.</p>
</>
}
descriptionArTitle=
{
<>
    <p>الميزة <span style={{fontWeight:"bold"}}>"Display"</span> في CSS تحدد كيفية عرض العنصر على صفحة الويب. تتحكم في سلوك تخطيط العنصر، مثل ما إذا كان يجب عرضه كمربع، مضمن، فليكس، شبكة، أو لا شيء (مخفي). على سبيل المثال:</p>
    <p><span style={{fontWeight:"bold"}}>مربع (block):</span> يأخذ العنصر كل العرض المتاح، مع سطر جديد قبله وبعده.</p>
    <p><span style={{fontWeight:"bold"}}>مضمن (inline):</span> يأخذ العنصر عرضاً فقط بقدر اللازم، ولا يبدأ في سطر جديد.</p>
    <p><span style={{fontWeight:"bold"}}>فليكس (flex):</span> يتم عرض العنصر كحاوية فليكس، مما يسمح بتخطيط مرن لعناصر بداخله.</p>
    <p><span style={{fontWeight:"bold"}}>شبكة (grid):</span> يتم عرض العنصر كحاوية شبكة، مما يسمح بتخطيط قائم على الشبكة لعناصر بداخله.</p>
    <p><span style={{fontWeight:"bold"}}>لا شيء (none):</span> لا يتم عرض العنصر على الإطلاق.</p>
</>
}/>

export const FlexDirectionDes = <PopconfirmElyTypes titleName={'Direction of Flex Items'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Flex Direction"</span> in CSS determines the direction in which flex items are placed in a flex container. It defines the main axis and the direction in which flex items are laid out. There are four possible values for flex direction:</p>
    <p><span style={{fontWeight:"bold"}}>row:</span> Flex items are placed in a horizontal line, starting from the left (in LTR) or right (in RTL)</p>
    <p><span style={{fontWeight:"bold"}}>row-reverse:</span> Flex items are placed in a horizontal line, starting from the right (in LTR) or left (in RTL).</p>
    <p><span style={{fontWeight:"bold"}}>column:</span> Flex items are placed in a vertical column, starting from the top.</p>
    <p><span style={{fontWeight:"bold"}}>column-reverse:</span> Flex items are placed in a vertical column, starting from the bottom.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"اتجاه الفليكس" (Flex Direction)</span> في CSS يحدد الاتجاه الذي يتم فيه وضع عناصر الفليكس داخل الحاوية. يحدد المحور الرئيسي والاتجاه الذي يتم فيه ترتيب عناصر الفليكس. هناك أربع قيم ممكنة لاتجاه الفليكس:</p>
    <p><span style={{fontWeight:"bold"}}>row:</span> تُوضع عناصر الفليكس في خط أفقي، تبدأ من اليسار (في النصوص من اليسار إلى اليمين) أو اليمين (في النصوص من اليمين إلى اليسار).</p>
    <p><span style={{fontWeight:"bold"}}>row-reverse:</span> تُوضع عناصر الفليكس في خط أفقي، تبدأ من اليمين (في النصوص من اليسار إلى اليمين) أو اليسار (في النصوص من اليمين إلى اليسار).</p>
    <p><span style={{fontWeight:"bold"}}>column:</span> تُوضع عناصر الفليكس في عمود عمودي، تبدأ من الأعلى.</p>
    <p><span style={{fontWeight:"bold"}}>column-reverse:</span> تُوضع عناصر الفليكس في عمود عمودي، تبدأ من الأسفل.</p>
</>
}/>

export const JustifyContentDes = <PopconfirmElyTypes titleName={'Justify Content'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Justify Content"</span> feature in CSS aligns and distributes space between items in a container, such as a flexbox or grid. It determines how the extra space around items is used. Common values include:</p>
    <p><span style={{fontWeight:"bold"}}>flex-start::</span> Items are packed at the start.</p>
    <p><span style={{fontWeight:"bold"}}>flex-end:</span> Items are packed at the end.</p>
    <p><span style={{fontWeight:"bold"}}>center:</span> Items are centered.</p>
    <p><span style={{fontWeight:"bold"}}>space-between:</span> Space is distributed evenly, with the first item at the start and the last item at the end.</p>
    <p><span style={{fontWeight:"bold"}}>space-around:</span> Space is distributed evenly with equal space around each item.</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"Justify Content"</span> في CSS تُحدد كيفية توزيع الفراغ حول العناصر داخل الحاوية، مثل علبة مرنة أو شبكة. تحدد كيفية استخدام الفراغ الإضافي حول العناصر. القيم الشائعة تشمل:</p>
    <p><span style={{fontWeight:"bold"}}>flex-start:</span> العناصر مرتبة من البداية.</p>
    <p><span style={{fontWeight:"bold"}}>flex-end:</span> العناصر مرتبة من النهاية.</p>
    <p><span style={{fontWeight:"bold"}}>center:</span>  العناصر مُركزة في المنتصف</p>
    <p><span style={{fontWeight:"bold"}}>space-between:</span> التباعد موزع بالتساوي، مع العنصر الأول في البداية والعنصر الأخير في النهاية.</p>
    <p><span style={{fontWeight:"bold"}}>space-around:</span> التباعد موزع بالتساوي مع فراغ متساوٍ حول كل عنصر.</p>
</>
}/>

export const AlignItemsDes = <PopconfirmElyTypes titleName={'Align Items'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Align Items"</span> feature in CSS is used to align items along the cross-axis (perpendicular to the main axis) in a flex container. It helps control how flex items are positioned within a flex container when they have different sizes. Options include flex-start, flex-end, center, baseline, and stretch. For example, setting align-items: center; will center the items vertically if the flex direction is row, or horizontally if the flex direction is column.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>خاصية "توجيه العناصر(Align Items)":</span> تُستخدم في CSS لتوجيه العناصر على محور الصلة (المتعامد على المحور الرئيسي) في حاوية flex. تساعد على التحكم في كيفية تموضع العناصر داخل حاوية flex عندما تكون لديها أحجام مختلفة. تشمل الخيارات flex-start، flex-end، center، baseline، و stretch. على سبيل المثال، تعيين align-items: center; سيُوسّط العناصر عمودياً إذا كان اتجاه flex هو صف، أو أفقياً إذا كان اتجاه flex هو عمود.</p>
</>
}/>

export const GapDes = <PopconfirmElyTypes titleName={'Gap Between Flex Items'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Gap"</span> feature in CSS is used to define the space between items in a grid or flex container. It can be applied to both rows and columns in a grid or between flex items in a flex container, allowing you to easily manage the spacing without needing to use margins or padding.For example, gap: 10px; sets a 10-pixel space between all items.</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>الفجوة(Gap)</span> في CSS تُستخدم لتعريف المسافة بين العناصر في حاوية الشبكة أو الفليكس. يمكن تطبيقها على الصفوف والأعمدة في الشبكة أو بين العناصر الفليكسية في حاوية الفليكس، مما يسمح لك بإدارة التباعد بسهولة دون الحاجة إلى استخدام الهوامش أو الحشوات. على سبيل المثال، gap: 10px; يضع مسافة 10 بكسل بين جميع العناصر.</p>
</>
}/>

export const FlexWrapDes = <PopconfirmElyTypes titleName={'Flex Wrap'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Flex Wrap"</span> feature in CSS controls how flex items are wrapped in a flex container. It allows you to specify whether items should stay on a single line or wrap onto multiple lines as needed. This is useful for responsive layouts where you want items to adjust and fit within the available space.</p>
    <p>Here are the options for "Flex Wrap":</p>
    <p><span style={{fontWeight:"bold"}}>nowrap:</span> All flex items are kept on a single line.</p>
    <p><span style={{fontWeight:"bold"}}>wrap:</span> Flex items will wrap onto multiple lines, from top to bottom.</p>
    <p><span style={{fontWeight:"bold"}}>wrap-reverse:</span> Flex items will wrap onto multiple lines, from bottom to top.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>خاصية "Flex Wrap" في CSS</span> تتحكم في كيفية تفريق عناصر الفليكس داخل حاوية فليكس. تسمح لك بتحديد ما إذا كان يجب أن تبقى العناصر على سطر واحد أو تتفرق على عدة أسطر حسب الحاجة. هذا مفيد لتخطيطات الاستجابة حيث ترغب في ضبط وتناسب العناصر ضمن المساحة المتاحة.</p>
    <p>وإليك الخيارات المتاحة لـ "Flex Wrap":</p>
    <p><span style={{fontWeight:"bold"}}>nowrap:</span> جميع عناصر الفليكس تبقى على سطر واحد.</p>
    <p><span style={{fontWeight:"bold"}}>wrap:</span> تتفرق عناصر الفليكس على عدة أسطر من الأعلى إلى الأسفل.</p>
    <p><span style={{fontWeight:"bold"}}>wrap-reverse:</span> تتفرق عناصر الفليكس على عدة أسطر من الأسفل إلى الأعلى.</p>
</>
}/>

export const FlexGrowDes = <PopconfirmElyTypes titleName={'Flex Grow Factor'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"flex-grow"</span> property in CSS specifies how much a flex item should grow relative to the rest of the flex items in the same container. If all items have a flex-grow value of 1, they will grow equally. If one item has a higher flex-grow value, it will take up more space compared to others.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>خاصية "flex-grow" في CSS:</span> تحدد هذه الخاصية كمية نمو العنصر المرن بالنسبة لبقية العناصر المرنة في نفس الحاوية. إذا كانت جميع العناصر لديها قيمة "flex-grow" تساوي 1، فستنمو بالتساوي. إذا كان لدى عنصر واحد قيمة "flex-grow" أعلى، فسيأخذ مساحة أكبر مقارنة بالآخرين.</p>
</>
}/>

export const FlexBasisDes = <PopconfirmElyTypes titleName={'Flex Basis'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"flex-basis"</span> feature in CSS sets the initial main size of a flex item. It's like setting a base size for the item before any flex-grow or flex-shrink calculations take place. It can be set to a specific size (e.g., 100px) or a percentage of the flex container. If you set it to auto, the item will size itself based on its content.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>خاصية "flex-basis" في CSS</span> تحدد الحجم الرئيسي الأولي لعنصر الفليكس. إنها تشبه تحديد حجم أساسي للعنصر قبل أي حسابات للتمدد أو التقلص في الفليكس. يمكن تعيينها إلى حجم محدد (مثل 100 بكسل) أو نسبة من حاوية الفليكس. إذا قمت بتعيينها إلى auto، فسيقوم العنصر بتحديد حجمه بناءً على محتواه.</p>
</>
}/>

export const FlexFlowDes = <PopconfirmElyTypes titleName={'Flex Flow'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Flex Flow"</span> feature in CSS is a shorthand property for setting both the flex-direction and flex-wrap properties. It controls the direction and wrapping behavior of the flex items within a flex container. By using flex-flow, you can define whether the items should be laid out in a row or column, and whether they should wrap onto multiple lines or stay on a single line.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Flex Flow"</span> في CSS هي خاصية مختصرة لضبط خصائص كل من flex-direction و flex-wrap. تتحكم في اتجاه وسلوك اللفافات لعناصر flex داخل حاوية flex. باستخدام flex-flow، يمكنك تحديد ما إذا كان يجب ترتيب العناصر في صف أو عمود، وما إذا كان يجب لفها على عدة أسطر أو البقاء على سطر واحد.</p>
</>
}/>

export const FlexShrinkDes = <PopconfirmElyTypes titleName={'Flex Shrink'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"flex-shrink"</span> feature in CSS determines how much a flex item will shrink relative to the rest of the flex items in the same container when there is not enough space. For example, if a flex container has three items and the first item's flex-shrink is set to 2 while the others are set to 1, the first item will shrink twice as much as the others when the container is too small.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"flex-shrink"</span> في CSS تحدد مقدار انكماش العنصر المرن بالنسبة لبقية العناصر المرنة في نفس الحاوية عندما يكون هناك عدم كفاية في المساحة. على سبيل المثال، إذا كانت هناك حاوية مرنة تحتوي على ثلاثة عناصر وكانت خاصية "flex-shrink" للعنصر الأول مضبوطة على 2 بينما العناصر الأخرى مضبوطة على 1، فإن العنصر الأول سينكمش بمقدار ضعف ما ينكمش به العناصر الأخرى عندما تكون الحاوية صغيرة جدًا.</p>
</>
}/>

export const CursorDes = <PopconfirmElyTypes titleName={'Cursor Type'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Cursor"</span> feature in CSS is used to change the appearance of the mouse pointer when it hovers over an element. It can be used to indicate different actions, such as clicking a link, moving text, resizing an element, or showing a loading state. By specifying different cursor styles, you can enhance user experience by providing visual feedback on what actions are possible. Common values include pointer, default, move, text, wait, and not-allowed.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Cursor"</span> في CSS تُستخدم لتغيير مظهر مؤشر الفأرة عندما يحوم فوق عنصر معين. يمكن استخدامها للإشارة إلى إجراءات مختلفة مثل النقر على رابط، نقل النص، تغيير حجم العنصر، أو إظهار حالة التحميل. من خلال تحديد أنماط مختلفة للمؤشر، يمكنك تعزيز تجربة المستخدم بتوفير ردود فعل بصرية حول الإجراءات الممكنة. القيم الشائعة تشمل pointer، default، move، text، wait، و not-allowed.</p>
</>
}/>

export const FloatDes = <PopconfirmElyTypes titleName={'Float Position'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Float"</span> feature in CSS is used to position an element to the left or right within its container, allowing text and inline elements to wrap around it. This is commonly used to create text wrapping around images</p>
</>
}
descriptionArTitle=
{
<>
    <p>يتم استخدام ميزة <span style={{fontWeight:"bold"}}>"التعويم (Float)"</span> في CSS لتمرين عنصر إلى اليسار أو اليمين داخل حاويته، مما يسمح للنصوص والعناصر النصية بالتفاف حوله. يُستخدم هذا بشكل شائع لإنشاء التفاف النص حول الصور.</p>
</>
}/>

export const ClearDes = <PopconfirmElyTypes titleName={'Clear Floating Elements'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Clear"</span> property in CSS is used to control the flow of elements after floating elements. It specifies whether an element should be moved below (cleared) floating elements that precede it. The possible values are none, left, right, and both.</p>
    <p><span style={{fontWeight:"bold"}}>none:</span> Default value. Allows floating elements on both sides.</p>
    <p><span style={{fontWeight:"bold"}}>left:</span> The element must be moved below left-floating elements.</p>
    <p><span style={{fontWeight:"bold"}}>right:</span> The element must be moved below right-floating elements.</p>
    <p><span style={{fontWeight:"bold"}}>both:</span> The element must be moved below both left and right floating elements.</p>
</>
}
descriptionArTitle=
{
<>
    <p>الخاصية <span style={{fontWeight:"bold"}}>"Clear"</span> في CSS تُستخدم للتحكم في تدفق العناصر بعد العناصر المعلقة. تُحدد ما إذا كان يجب نقل العنصر أدناه (مسحه) من العناصر المعلقة التي تسبقه. القيم الممكنة هي none، left، right، و both.</p>
    <p><span style={{fontWeight:"bold"}}>none:</span> القيمة الافتراضية. تسمح بالعناصر المعلقة على كلا الجانبين.</p>
    <p><span style={{fontWeight:"bold"}}>left:</span> يجب نقل العنصر أدناه من العناصر المعلقة على الجانب الأيسر.</p>
    <p><span style={{fontWeight:"bold"}}>right:</span> يجب نقل العنصر أدناه من العناصر المعلقة على الجانب الأيمن.</p>
    <p><span style={{fontWeight:"bold"}}>both:</span> يجب نقل العنصر أدناه من كل من العناصر المعلقة على الجانبين الأيسر والأيمن.</p>
</>
}/>

export const OverflowDes = <PopconfirmElyTypes titleName={'Overflow Behavior'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Overflow"</span> feature in CSS controls what happens to content that overflows its container. It has options like visible (default, shows overflow content), hidden (hides overflow content), scroll (adds scrollbars to view the overflow), and auto (adds scrollbars only when necessary). This helps manage content that is too large to fit within its container's boundaries.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Overflow"</span> في CSS تتحكم في ما يحدث للمحتوى الذي يتجاوز حاويته. لها خيارات مثل visible (افتراضي، يظهر محتوى التجاوز)، hidden (يخفي محتوى التجاوز)، scroll (يضيف شريط تمرير لعرض التجاوز)، و auto (يضيف شريط تمرير فقط عند الضرورة). هذا يساعد في إدارة المحتوى الذي يكون كبيرًا جدًا ليتناسب مع حدود حاويته.</p>
</>
}/>
 
export const overflowXDes = <PopconfirmElyTypes titleName={'Horizontal Overflow Behavior'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Overflow-x"</span> feature in CSS controls how content that overflows the horizontal bounds of an element is handled. It can be set to various values:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> The content is not clipped and can overflow outside the element.</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> The content is clipped and hidden.</p>
    <p><span style={{fontWeight:"bold"}}>scroll:</span> Scrollbars are added, allowing users to scroll to see the overflow content.</p>
    <p><span style={{fontWeight:"bold"}}>auto:</span> Scrollbars are added only when necessary.</p>
</>
}
descriptionArTitle=
{
<>
    <p>تتحكم ميزة <span style={{fontWeight:"bold"}}>"Overflow-x"</span> في CSS في كيفية معالجة المحتوى الذي يتجاوز الحدود الأفقية لعنصر معين. يمكن تعيينها إلى قيم مختلفة:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> لا يتم قص المحتوى ويمكن أن يتجاوز خارج العنصر.</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> يتم قص المحتوى وإخفاؤه.</p>
    <p><span style={{fontWeight:"bold"}}>scroll:</span> يتم إضافة شريط تمرير، مما يسمح للمستخدمين بالتمرير لرؤية المحتوى الزائد.</p>
    <p><span style={{fontWeight:"bold"}}>auto:</span> يتم إضافة شريط تمرير فقط عند الضرورة.</p>
</>
}/>

export const overflowYDes = <PopconfirmElyTypes titleName={'Vertical Overflow Behavior'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Overflow-y"</span> feature in CSS controls what happens to content that overflows the top and bottom edges of an element's box. It can be set to:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> Content is not clipped and may overflow outside the element's box.</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> Content is clipped and not visible outside the element's box.</p>
    <p><span style={{fontWeight:"bold"}}>scroll:</span> Content is clipped, but a scrollbar is added to see the hidden content.</p>
    <p><span style={{fontWeight:"bold"}}>auto:</span> Adds a scrollbar only if the content overflows.</p>
</>
}
descriptionArTitle=
{
<>
    <p>تتحكم ميزة "Overflow-y" في CSS في ما يحدث للمحتوى الذي يتجاوز حواف الأعلى والأسفل لصندوق العنصر. يمكن تعيينها إلى:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> الحاويات غير مقصوصة وقد يتجاوز المحتوى خارج صندوق العنصر.</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> يتم قص المحتوى ولا يظهر خارج صندوق العنصر.</p>
    <p><span style={{fontWeight:"bold"}}>scroll:</span> يتم قص المحتوى ولكن يتم إضافة شريط تمرير لرؤية المحتوى المخفي.</p>
    <p><span style={{fontWeight:"bold"}}>auto:</span> يتم إضافة شريط تمرير فقط إذا تجاوز المحتوى.</p>
</>
}/>

export const VisibilityDes = <PopconfirmElyTypes titleName={'Visibility'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"visibility"</span> property in CSS controls whether an element is visible or hidden without affecting the layout of the page. When an element is set to hidden, it is not visible, but it still takes up space in the layout. This is different from display: none, which removes the element from the layout entirely. The main values are:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> The element is visible (default value).</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> The element is not visible but still affects the layout.</p>
    <p><span style={{fontWeight:"bold"}}>collapse:</span> Only for table elements, hides the row or column and frees up the space.</p>
    <p style={{fontWeight:"bold"}}>This property is useful for making elements invisible while maintaining their position in the layout.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"visibility"</span> في CSS تتحكم في ما إذا كان العنصر مرئيًا أم مخفيًا دون التأثير على تخطيط الصفحة. عندما يُعين العنصر على القيمة "hidden"، فإنه لا يظهر، ولكنه لا يزال يأخذ مساحة في التخطيط. هذا يختلف عن display: none، الذي يقوم بإزالة العنصر تمامًا من التخطيط. القيم الرئيسية هي:</p>
    <p><span style={{fontWeight:"bold"}}>visible:</span> العنصر مرئي (القيمة الافتراضية).</p>
    <p><span style={{fontWeight:"bold"}}>hidden:</span> العنصر غير مرئي لكنه يؤثر على التخطيط.</p>
    <p><span style={{fontWeight:"bold"}}>collapse:</span> فقط لعناصر الجداول، يخفي الصف أو العمود ويحرر المساحة.</p>
    <p style={{fontWeight:"bold"}}>هذه الخاصية مفيدة لجعل العناصر غير مرئية مع الحفاظ على موقعها في التخطيط.</p>
</>
}/>

export const ZIndexDes = <PopconfirmElyTypes titleName={'Stacking Order (Z-Index)'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Z-Index"</span> property in CSS determines the stack order of elements on a webpage. Elements with a higher z-index value are displayed in front of those with a lower value. This property only works on positioned elements (those with a position value other than static).</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"Z-Index"</span> في CSS تحدد ترتيب العناصر في الكومة على صفحة الويب. العناصر ذات قيمة Index-Z أعلى تُعرض أمام العناصر ذات القيمة الأقل. تعمل هذه الخاصية فقط على العناصر الموضوعة (التي لديها قيمة موضع مختلفة عن الثابتة).</p>
</>
}/>

export const BoxSizingDes = <PopconfirmElyTypes titleName={'Box Sizing Model'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Box Sizing"</span> feature in CSS determines how the width and height of an element are calculated. By default, the width and height of an element only include the content, but with box-sizing: border-box, they also include padding and border, making it easier to control the overall size of the element.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}> "Box Sizing" </span> في CSS تحدد كيفية حساب عرض وارتفاع العنصر. بشكل افتراضي، يتضمن عرض وارتفاع العنصر فقط المحتوى، ولكن مع box-sizing: border-box، يتضمن أيضًا الحشو والحدود، مما يسهل التحكم في الحجم الإجمالي للعنصر.</p>
</>
}/>

export const GridTemplateColumnsDes = <PopconfirmElyTypes titleName={'Grid Template Columns'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Grid Template Columns"</span> feature in CSS defines the columns of a grid layout. You can specify the width of each column, either with fixed sizes or proportions.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Grid Template Columns"</span> في CSS تحدد أعمدة تخطيط الشبكة. يمكنك تحديد عرض كل عمود، سواء بأحجام ثابتة أو نسب.</p> 
</>
}/>
/*****************************************************************************/
export const BorderDes = <PopconfirmElyTypes titleName={'Border'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"border"</span> property in CSS allows you to set the style, width, and color of an element's border. You can specify these aspects inidually or use shorthand to set them all at once.</p>
    <p>For example: 1px solid black; sets a 1-pixel-wide solid black border around an element.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"border"</span> في CSS تسمح لك بتعيين نمط، عرض، ولون حدود العنصر. يمكنك تحديد هذه الجوانب بشكل فردي أو استخدام اختصار لتعيينها جميعًا في آن واحد.</p>
    <p>على سبيل المثال: <code>1px solid black;</code> يعين حدودًا بعرض 1 بيكسل بلون أسود صلب حول العنصر.</p>
</>
}/>

export const BorderTopDes = <PopconfirmElyTypes titleName={'Border Top'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"border top"</span> feature in CSS allows you to specify the style, color, and width of the top border of an element. It helps in creating visual separation and defining the appearance of the top edge of an element on a webpage</p>
    <p>For example: 1px solid black;</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"(border top)الحدود العلوية"</span> في CSS تسمح لك بتحديد نمط، لون، وعرض الحدود العلوية لعنصر ما. تساعد في إنشاء فصل بصري وتعريف مظهر الحافة العلوية لعنصر على صفحة الويب</p>
    <p>على سبيل المثال: 1px solid black;</p>
</>
}/>

export const BorderBottomDes = <PopconfirmElyTypes titleName={'Border Bottom'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"border-bottom"</span> CSS property sets the style, color, and width of the bottom border of an element. It allows you to define a line at the bottom of an element, enhancing its visual appearance and separation from surrounding content.</p>
    <p>For example: 1px solid black;</p>
</>
}
descriptionArTitle=
{
<>
    <p>يعين خاصية CSS <span style={{fontWeight:"bold"}}>"border-bottom"</span> نمط الحدود، لونها، وعرض الحدود السفلية للعنصر. تُمكنك من تعريف خط في الجزء السفلي من العنصر، مما يعزز من مظهره البصري ويفصله عن المحتوى المحيط.</p>
    <p>على سبيل المثال: 1px solid black;</p>
</>
}/>

export const BorderRightDes = <PopconfirmElyTypes titleName={'Border Right'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"border-right"</span> CSS property sets the style, color, and width of the right border of an element. It allows you to define a line at the right of an element, enhancing its visual appearance and separation from surrounding content.</p>
    <p>For example: 1px solid black;</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية CSS <span style={{fontWeight:"bold"}}>"border-right"</span> تعيّن نمط ولون وعرض الحد الأيمن لعنصر ما. تُمكّنك هذه الخاصية من تعريف خط على الجانب الأيمن للعنصر، مما يعزز من مظهره البصري ويفصله عن المحتوى المحيط.</p>
    <p>مثال: 1px solid black;</p>
</>
}/>

export const BorderLeftDes = <PopconfirmElyTypes titleName={'Border Left'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"border-left"</span> CSS property sets the style, color, and width of the left border of an element. It allows you to define a line at the left of an element, enhancing its visual appearance and separation from surrounding content.</p>
    <p>For example: 1px solid black;</p>
</>
}
descriptionArTitle=
{
<>
    <p>تعيين خاصية <span style={{fontWeight:"bold"}}>"border-left"</span> في CSS يحدد نمط، لون، وعرض الحد الأيسر لعنصر. يسمح لك بتحديد خط في الجهة اليسرى من العنصر، مما يعزز مظهره البصري ويفصله عن المحتوى المحيط.</p>
    <p>على سبيل المثال: 1px solid black;</p>
</>
}/>

export const BorderRadiusDes = <PopconfirmElyTypes titleName={'Border Radius'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Border radius"</span> in CSS defines the roundness of the corners of an element's border. It allows you to create rounded corners by specifying a radius value, which determines how much curve or roundness there should be at each corner of the border. This feature is useful for creating softer, more visually appealing designs in web interfaces.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"(Border radius)نص الحدود الدائرية"</span> في CSS يعرف عن كثب زوايا حدود العنصر. يسمح لك بإنشاء زوايا مستديرة عن طريق تحديد قيمة للنصف القطري، مما يحدد مقدار الانحناء أو التدوير الذي يجب أن يكون في كل زاوية من حدود العنصر. هذه الميزة مفيدة لإنشاء تصاميم ناعمة وجذابة بصرياً في واجهات الويب.</p>
</>
}/>
/*****************************************************************************/
export const PaddingDes = <PopconfirmElyTypes titleName={'Padding'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"Padding"</span> in CSS is used to create space around the content inside an element's border. It sets the distance between the element's content and its border</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"(Padding)الحشو"</span> في CSS يُستخدم لإنشاء مسافة حول المحتوى داخل حدود العنصر. يُعين المسافة بين محتوى العنصر وحدوده</p>
</>
}/>

export const PaddingTopDes = <PopconfirmElyTypes titleName={'Padding Top'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"padding top"</span> feature in CSS controls the spacing between the content inside an element and its top border. It adds space inside the element, pushing its content away from the top border</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"(padding top)الحشو العلوي"</span> في CSS يتحكم في التباعد بين المحتوى داخل العنصر والحدود العلوية له. يضيف هذا التباعد داخل العنصر، مما يبعد محتواه عن الحدود العلوية</p>
</>
}/>

export const PaddingBottomDes = <PopconfirmElyTypes titleName={'Padding Bottom'} descriptionEnTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"padding-bottom"</span> property in CSS defines the spacing between the bottom content of an element and its border. It adds space inside the element, pushing the content away from the bottom border.</p>
</>
}
descriptionArTitle=
{
<>
    <p><span style={{fontWeight:"bold"}}>"(padding-bottom)الحشو السفلي"</span> الخاصية في CSS تعرف المسافة بين محتوى العنصر السفلي وحده الحدود. إنها تضيف مسافة داخل العنصر، مدفوعة المحتوى بعيداً عن الحدود السفلية.</p>
</>
}/>

export const PaddingRightDes = <PopconfirmElyTypes titleName={'Padding Right'} descriptionEnTitle=
{
<>
    <p>In CSS, the <span style={{fontWeight:"bold"}}>"padding-right"</span> property controls the space between the content and the right edge of its container. It adds space inside an element, pushing its content away from its right edge.</p>
</>
}
descriptionArTitle=
{
<>
    <p>في CSS، تتحكم خاصية <span style={{fontWeight:"bold"}}>"(padding-right)"</span> في المسافة بين المحتوى وحافة اليمين لعنصرها. تضيف هذه الخاصية مساحة داخل العنصر، مما يدفع المحتوى بعيدًا عن حافة اليمين له.</p>
</>
}/>

export const PaddingLeftDes = <PopconfirmElyTypes titleName={'Padding Left'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"Padding Left"</span> feature in CSS determines the space between the content of an element and its left edge. It's useful for creating space inside elements without affecting their size or layout.</p>
</>
}
descriptionArTitle=
{
<>
    <p>ميزة <span style={{fontWeight:"bold"}}>"(Padding Left)الحشو الأيسر"</span> في CSS تحدد المسافة بين محتوى العنصر وحافته اليسرى. إنها مفيدة لإنشاء مسافة داخل العناصر دون التأثير على حجمها أو تخطيطها.</p>
</>
}/>
/*****************************************************************************/
export const TransformDes = <PopconfirmElyTypes titleName={'Transform Options'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"transform"</span> feature in CSS allows you to apply various graphical transformations to an element. These transformations can include scaling, rotating, skewing, and translating (moving) elements</p>
</>
}
descriptionArTitle=
{
<>
    <p>الميزة <span style={{fontWeight:"bold"}}>"transform"</span> في CSS تسمح لك بتطبيق تحويلات رسومية مختلفة على عنصر. يمكن أن تشمل هذه التحويلات التكبير، الدوران، الانحناء، (التحريك) للعناصر.</p>
</>
}/>
/*****************************************************************************/
export const BoxShadowDes = <PopconfirmElyTypes titleName={'Box Shadow'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"boxShadow"</span> property in CSS allows you to add a shadow effect to an element. It takes values for horizontal and vertical offsets, blur radius, spread radius, color, and whether the shadow should be inset or outset.</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"boxShadow"</span> في CSS تسمح لك بإضافة تأثير ظل إلى عنصر ما. تأخذ الخاصية قيماً للإزاحة الأفقية والرأسية، نصف قطر الضبابية، نصف قطر الانتشار، اللون، وما إذا كان يجب أن يكون الظل داخلياً أم خارجياً.</p>
</>
}/>
/*****************************************************************************/
export const ObjectFitDes = <PopconfirmElyTypes titleName={'Object Fit'} descriptionEnTitle=
{
<>
    <p>You use <span style={{fontWeight:"bold"}}>"object-fit"</span> to specify how the content should be resized to fit the element is box.</p>
    <p><span style={{fontWeight:"bold"}}>fill:</span> Stretches the content to completely fill the container, disregarding aspect ratio.</p>
    <p><span style={{fontWeight:"bold"}}>contain:</span> Scales the content to maintain its aspect ratio while fitting within the container.</p>
    <p><span style={{fontWeight:"bold"}}>cover:</span> Scales the content to cover the entire container, cropping if necessary.</p>
    <p><span style={{fontWeight:"bold"}}>none:</span> Retains the original size of the content, overflowing the container if necessary.</p>
    <p><span style={{fontWeight:"bold"}}>scale-down:</span> Either none or contain, whichever results in smaller content.</p>
</>
}
descriptionArTitle=
{
<>
    <p>تستخدم <span style={{fontWeight:"bold"}}>"object-fit"</span> لتحديد كيفية تغيير حجم المحتوى ليتناسب مع صندوق العنصر.</p>
    <p><span style={{fontWeight:"bold"}}>fill:</span> يمتد المحتوى ليملأ تمامًا الحاوية، دون مراعاة نسبة العرض إلى الارتفاع.</p>
    <p><span style={{fontWeight:"bold"}}>contain:</span> يقوم بتغيير حجم المحتوى للحفاظ على نسبة عرضه إلى ارتفاعه أثناء التناسب داخل الحاوية.</p>
    <p><span style={{fontWeight:"bold"}}>cover:</span> يقوم بتغيير حجم المحتوى لتغطية الحاوية بأكملها، مع القص إذا لزم الأمر.</p>
    <p><span style={{fontWeight:"bold"}}>none:</span> يحافظ على الحجم الأصلي للمحتوى، متجاوزًا الحاوية إذا لزم الأمر.</p>
    <p><span style={{fontWeight:"bold"}}>scale-down:</span> إما عدم تغيير الحجم أو التناسب، بحيث يكون المحتوى الأصغر حجمًا.</p>
</>
}/>

export const ObjectPositionDes = <PopconfirmElyTypes titleName={'Object Position'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"object-position"</span> property in CSS allows you to specify the alignment of an image or video within its container</p>
</>
}
descriptionArTitle=
{
<>
    <p>خاصية <span style={{fontWeight:"bold"}}>"object-position"</span> في CSS تسمح لك بتحديد توزيع صورة أو فيديو داخل حاويته</p>
</>
}/>

export const OpacityDes = <PopconfirmElyTypes titleName={'Opacity'} descriptionEnTitle=
{
<>
    <p>The <span style={{fontWeight:"bold"}}>"opacity"</span> property in CSS controls the transparency of an element. It allows you to make an element partially or fully transparent.</p>
</>
}
descriptionArTitle=
{
<>
    <p>يتحكم الخاصية <span style={{fontWeight:"bold"}}>"opacity"</span> في CSS في شفافية العنصر. تتيح لك هذه الخاصية جعل العنصر شفافًا جزئيًا أو كليًا.</p>
</>
}/>
/*****************************************************************************/
export const PageName = <PopconfirmElyTypes titleName={t('name')} descriptionEnTitle=
{
<>
    <p>From here you choose the name that you will assign to what you will create, whether it is a page, component, or layout.....</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا تختار الاسم الذي ستعطيه لما ستقوم بإنشائه، سواء كان صفحة، مكون، أو تخطيط.....</p>         
</>
}
/>

export const PagePath = <PopconfirmElyTypes titleName={t('path')} descriptionEnTitle=
{
<>
    <p>The path property you give if what you want to create is a page so that it appears in the page title </p>
    <p>Example: 'Your Path' </p>
</>
}
descriptionArTitle=
{
<>
    <p>الخاصية path تُستخدم إذا كنت تريد إنشاء صفحة بحيث تظهر في عنوان الصفحة</p>
    <p>مثال: /'مسارك'</p>  
</>
}/>

export const PageType = <PopconfirmElyTypes titleName={t('type')} descriptionEnTitle=
{
<>
    <p>From here, choose the type you want what you're creating now to be</p>
    <p><span style={{fontWeight:"bold"}}>{t('page')}:</span>You choose it if what you want to create is a page within the site</p>
    <p><span style={{fontWeight:"bold"}}>{t('mobile app page')}:</span>You can choose it if what you want to create is a page within the site to fit the mobile screen size</p>
    <p><span style={{fontWeight:"bold"}}>{t('layout')}:</span>The layout system provides a flexible and straightforward way to design the structure of your web application and serves as a stable container surrounding the web page you create.</p>
    <p><span style={{fontWeight:"bold"}}>{t('components')}:</span>components are building blocks that encapsulate reusable parts of your user interface. They can be thought of as custom HTML elements that you can create to represent specific parts of your UI. Each component can have its own logic, state, and properties (props) that allow them to be flexible and reusable across different parts of your application. Components help in organizing your UI into independent and manageable pieces, promoting reusability and maintainability in your codebase.</p>
</>
}
descriptionArTitle=
{
<>
    <p>اختر نوع العنصر الذي ترغب في إنشائه الآن</p>
    <p><span style={{fontWeight:"bold"}}>{t('page')}:</span> اختر هذا النوع إذا كنت ترغب في إنشاء صفحة داخل الموقع</p>
    <p><span style={{fontWeight:"bold"}}>{t('mobile app page')}:</span> اختر هذا النوع إذا كنت ترغب في إنشاء صفحة داخل الموقع تتناسب مع حجم الشاشة المحمولة</p>
    <p><span style={{fontWeight:"bold"}}>{t('layout')}:</span> يوفر نظام التخطيط طريقة مرنة وبسيطة لتصميم هيكل تطبيق الويب الخاص بك، ويعتبر حاوية ثابتة تحيط بالصفحة الويب التي تنشئها.</p>
    <p><span style={{fontWeight:"bold"}}>{t('components')}:</span> تعد العناصر النمطية مكونات تكوينية تغلف أجزاءًا قابلة لإعادة الاستخدام من واجهة المستخدم الخاصة بك. يمكن اعتبارها عناصر HTML مخصصة يمكنك إنشاؤها لتمثيل أجزاء محددة من واجهة المستخدم الخاصة بك. يمكن أن تحتوي كل عنصر على منطقه وحالته وخصائص (props) الخاصة به التي تسمح له بأن يكون مرنًا وقابلًا لإعادة الاستخدام عبر أجزاء مختلفة من تطبيقك. تساعد العناصر في تنظيم واجهة المستخدم إلى قطع مستقلة وقابلة للإدارة، مع تعزيز إعادة الاستخدام وسهولة الصيانة في قاعدة الأكواد الخاصة بك.</p>

</>
}/>

export const PageLayout = <PopconfirmElyTypes titleName={t('page layout')} descriptionEnTitle=
{
<>
    <p>You set this property if what you want to create is a page and you choose it in order to outline the structure of the page</p>
</>
}
descriptionArTitle=
{
<>
    <p>هذه الخاصية تقوم بتعيينها اذا كان ما تريد انشائه هو صفحة وتقوم باختيارها حتى تقوم بالاحاطة بهيكل الصفحة</p>
</>
}/>
/*****************************************************************************/
export const LangEn = <PopconfirmElyTypes titleName={t('en')} descriptionEnTitle=
{
<>
    <p>The text you want to appear inside the select when the language is English</p>
</>
}
descriptionArTitle=
{
<>
    <p>النص الذي ترغب في ظهوره داخل الاختيار عندما يكون اللغة هي الإنجليزية</p> 
</>
}/>

export const LangAr = <PopconfirmElyTypes titleName={''} descriptionEnTitle=
{
<>
    <p>The text you want to appear inside the select when the language is Arabic</p>
</>
}
descriptionArTitle=
{
<>
    <p>النص الذي ترغب في ظهوره داخل الاختيار عندما يكون اللغة هي العربية</p> 
</>
}/>
/*****************************************************************************/
export const ReadFromDataModel = <PopconfirmElyTypes titleName={t('read data from model')} descriptionEnTitle=
{
<>
    <p>From here, you choose the model from which you want to import data</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا، تختار النموذج الذي ترغب في استيراد البيانات منه</p>
</>
}/>

export const ReadDataDisplay = <PopconfirmElyTypes titleName={t('data display')} descriptionEnTitle=
{
<>
    <p>From here you choose the data you want to display</p>
</>
}
descriptionArTitle=
{
<>
    <p>From here you choose the data you want to display</p>
</>
}/>

export const VariableName = ({variable})=> <PopconfirmElyTypes titleName={''} descriptionEnTitle=
{
<>
    <p>From here you set the {variable?.variable_name} you want to place inside</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا تقوم بتعيين {variable?.variable_name} الذي ترغب في وضعه هنا</p>
</>
}/>

export const IsBlank = <PopconfirmElyTypes titleName={t('is blank')} descriptionEnTitle=
{
<>
    <p>Do you want to open the link in the same window or in a new window?</p>
</>
}
descriptionArTitle=
{
<>
    <p>هل ترغب في فتح الرابط في نفس النافذة أم في نافذة جديدة؟</p>
</>
}/>

export const ImgUrl = <PopconfirmElyTypes titleName={t('image url')} descriptionEnTitle=
{
<>
    <p>Choose the link address where you want to place the image</p>
</>
}
descriptionArTitle=
{
<>
    <p>قم بوضع رابط الصورة هنا</p>
</>
}/>

export const LinkDes = <PopconfirmElyTypes titleName={t('link')} descriptionEnTitle=
{
<>
    <p>Choose the link you want to go to when you click on the item</p>
</>
}
descriptionArTitle=
{
<>
    <p>اختر الرابط الذي ترغب في الانتقال إليه عند النقر فوق العنصر</p>  
</>
}/>

export const HideOnSize = <PopconfirmElyTypes titleName={t('hide on size')} descriptionEnTitle=
{
<>
    <p>From here you can choose the screen size you want to hide content when accessing it</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا يمكنك اختيار حجم الشاشة الذي ترغب في إخفاء المحتوى عند الوصول إليه</p>
</>
}/>

export const ShowOnSize = <PopconfirmElyTypes titleName={t('show on size')} descriptionEnTitle=
{
<>
    <p>From here you can choose the screen size you want to display the content when accessing it</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا يمكنك اختيار حجم الشاشة الذي ترغب في إظهار المحتوى عند الوصول إليه</p>
</>
}/>

export const IconDes = <PopconfirmElyTypes titleName={t('Icon')} descriptionEnTitle=
{
<>
    <p>From here you can choose the shape of the icon you want to display inside the button</p>
</>
}
descriptionArTitle=
{
<>
    <p>من هنا يمكنك اختيار شكل الأيقونة التي ترغب في عرضها داخل الزر</p>        
</>
}/>
export default DescriptionProperties