<template>
  <main class="mt-5 container" id="root">
    <div class="p-4 p-md-5 mb-4 mt-5 row text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="bg-white col-lg-2 mt-5 rounded-3 load d-lg-block ">

        <div class=" p-3 bg-white rounded  w-100 shadow-sm">
            <h6 class="border-bottom pb-2 mb-0">Suggestions</h6>
            <div class="d-flex text-muted pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>

              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span class="d-block">@username</span>
              </div>
            </div>
            <div class="d-flex text-muted pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>

              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span class="d-block">@username</span>
              </div>
            </div>
            <div class="d-flex text-muted pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>

              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span class="d-block">@username</span>
              </div>
            </div>
            <div class="d-flex text-muted pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>

              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span class="d-block">@username</span>
              </div>
            </div>
            <div class="d-flex text-muted pt-3">
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>

              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                  <strong class="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span class="d-block">@username</span>
              </div>
            </div>
            <small class="d-block text-end mt-3">
              <a href="#">All suggestions</a>
            </small>
          </div>
      </div>


      <!--        <div class="b-example-divider"></div>-->
      <div class=" container bg-white  col-lg-8  mt-5  js-toc-content mb-4">
        <!--            博客内容-->
        <div class=" animate__fadeIn animate__animated my-4  ">
          <div class="row h4 ">
            <a class="w-auto small " href="#">杨新宇</a>
            <div class="blog-post-meta small col">2022-09-22 02:28:05</div>
            <div class="badge bg-black  float-end col-md-1 h-40px w-auto mousePoint  my-auto">Spring
            </div>
            <!--                   <span class="badge bg-secondary float-end">New</span>-->
          </div>

          <article class="blog-post ">
            <h1 id="t0" class="blog-post-title mb-3 border-bottom ">Spring笔记</h1>
            <h2 id="t1">一、简介</h2>
            <p>
              javascript字符串转换成utf-8编码方式有：1、支持window.TextEncoder()的情况，语法“TextEncoder('utf8');”
              2、利用encodeURI的编码进行替换，语法“encodeURI(字符串)”。</p>
            <pre><code class="language-java" v-text="code"></code></pre>

            <pre><a class="btn end-10 btn-outline-light btn-sm position-absolute "
                    href="#top">复制</a><code
                class="language-css">p { color : red}</code></pre>
            <pre><code class="language-css">p { color : red}</code></pre>
            <h2 id="t2">二、引用样式</h2>
            <p>This is an example blockquote in action:</p>

            <p class="blockquote">Quoted text goes here.</p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="exL">2.1、示例列表</h3>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout. This is an example unordered
              list:</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>And this is an ordered list:</p>
            <ol>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ol>
            <p>And this is a definition list:</p>
            <dl>
              <dt>HyperText Markup Language (HTML)</dt>
              <dd>The language used to describe and define the content of a Web page</dd>
              <dt>Cascading Style Sheets (CSS)</dt>
              <dd>Used to describe the appearance of Web content</dd>
              <dt>JavaScript (JS)</dt>
              <dd>The programming language used to build advanced Web sites and applications</dd>
            </dl>
            <h2 id="t3">三、内联标签</h2>
            <p>HTML defines a long list of available inline tags, a complete list of which can be found
              on
              the
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer
                Network</a>.</p>
            <ul>
              <li><strong>To bold text</strong>, use <code
                  class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.
              </li>
              <li><em>To italicize text</em>, use <code
                  class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
              </li>
              <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use
                <code
                    class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an
                optional
                <code
                    class="language-plaintext highlighter-rouge">title</code> attribute for the
                full
                phrase.
              </li>
              <li>Citations, like <cite>— Mark Otto</cite>, should use <code
                  class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.
              </li>
              <li>
                <del>Deleted</del>
                text should use <code
                  class="language-plaintext highlighter-rouge">&lt;del&gt;</code>
                and
                <ins>inserted</ins>
                text should use <code
                  class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.
              </li>
              <li>Superscript <sup>text</sup> uses <code
                  class="language-plaintext highlighter-rouge">&lt;sup&gt;</code>
                and subscript <sub>text</sub> uses <code
                    class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
              </li>
            </ul>
            <p>Most of these elements are styled by browsers with few modifications on our part.</p>
            <h2 id="t4">四、标题</h2>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="t5">4.1、副标题</h3>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <pre><code>Example code block</code></pre>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>


            <h2 id="t6" class="blog-post-title">五、另一篇博客</h2>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <blockquote>
              <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the
                middle of
                it.
              </p>
            </blockquote>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="t7">5.1、示例表格</h3>
            <p>And don't forget about tables in these posts:</p>
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
              </tfoot>
            </table>

            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>

            <h2 id="t8" class="blog-post-title">六、新功能</h2>
            <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>
          </article>


        </div>


        <nav class="blog-pagination border-top my-0 py-4 " aria-label="Pagination">

          <li class="float-start me-2">
            <a class="mousePoint" id="starBtn" title="收藏">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                   viewBox="0 0 16 16">
                <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>

            </a>
            <small aria-label="starBtn">123</small>
          </li>
          <li class="float-start me-2">
            <a class="mousePoint" title="点赞">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                <path
                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
              </svg>
            </a>
            <small>33</small>
          </li>


          <li class="float-start me-2">
            <a class="mousePoint">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                   viewBox="0 0 16 16">
                <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>

            </a>
            <small>123</small>
          </li>


        </nav>

      </div>
      <div class="col-lg-2  mt-5 ">
        <div class="position-sticky" style="top: 5rem;padding-left: 1rem">
          <div class="text-dark text-center border-bottom-1 mb-2 h5">目录</div>
          <li class="dropdown-divider"></li>
          <div class="js-toc float-start link-dark text-dark mb-2 "></div>

        </div>


      </div>


    </div>

    <!--    <iframe src="../user/footer.html"></iframe>-->
    <to-top></to-top>
  </main>
</template>

<script>
import toTop from "@/components/toTop.vue";
import Plyr from 'plyr/dist/plyr'
import $ from 'jquery/dist/jquery.min'
import 'tocbot/dist/tocbot'
import tocbot from "tocbot";
import hljs from "highlight.js";
export default {
  name: "MarkDownInfo",
  components: {
    toTop
    // highlightjs: hljsVuePlugin.component
  },
  data() {
    return {
      code: 'public String testUp(MultipartFile photo, HttpSession session, Model model)\n' +
          '            throws IOException {\n' +
          '        //此处变量名必须和请求name相同\n' +
          '        if (photo == null) {\n' +
          '            model.addAttribute("ex", "请上传文件");\n' +
          '            return "error";\n' +
          '        }\n' +
          '        long time = System.currentTimeMillis();\n' +
          '        long size = photo.getSize();\n' +
          '\n' +
          '        //上传到target项目文件中\n' +
          '        String filename = photo.getOriginalFilename();\n' +
          '        //获取上传的文件后缀名\n' +
          '        String suffixName = filename.substring(filename.indexOf("."));\n' +
          '        String finalPath = photoPath + File.separator + filename;\n' +
          '        photo.transferTo(new File(finalPath));\n' +
          '\n' +
          '        model.addAttribute("msg", "上传成功");\n' +
          '        return "file";\n' +
          '    }'
    };
  },
  methods: {},
  mounted() {

    hljs.highlightAll();


    $("#sqmh").removeClass('active')
    // $("header").load("/static/user/userHeader.html");
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3,h4',
      // For headings inside relative or absolute positioned containers within content.
      // hasInnerContainers: true,
      // 连接的class
      activeListClass: 'link-dark',
      // activeListItemClass: 'text-primary',
      collapseDepth: 6,


      // Only takes affect when `tocSelector` is scrolling,
// keep the toc scroll position in sync with the content.
//         disableTocScrollSync: true
    });

    const players = Plyr.setup('.player',
        {
          i18n: {
            speed: '速度',
            normal: '正常',
          }
        });

    // let qrcode = new QRCode(document.getElementById("qrcode"), {
    //   text: window.location.href,
    //   width: 128,
    //   height: 128,
    //   colorDark: "#000000",
    //   colorLight: "#ffffff",
    //   correctLevel: QRCode.CorrectLevel.H
    // });

    // setTimeout(function (){
    //   Prism.highlightAll();
    // },200)
  }
}
</script>

<style scoped>

.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}

.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.toc-link::before {
  list-style: none;
}

li::marker {
  list-style: none;
}

.fw-semibold {
  font-weight: 600;
}

.lh-tight {
  line-height: 1.25;
}
/* stylelint-disable selector-list-comma-newline-after */

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}

.display-4 {
  font-size: 2.5rem;
}
@media (min-width: 768px) {
  .display-4 {
    font-size: 3rem;
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
}

.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  margin-bottom: .25rem;
  font-size: 2.5rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
}

/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}

</style>