module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  var conf = {
    plugin_branches: {
      include_files: [
        "includes/**",
        "assets/**",
        "vendor/**",
        "!vendor/freemius/.codeclimate.yml",
        "!vendor/freemius/.gitignore",
        "!vendor/freemius/gulpfile.js",
        "!vendor/freemius/package.json",
        "!vendor/freemius/composer.json",
        "!vendor/freemius/languages/**",
        "!vendor/freemius/README.md",
        "vendor/freemius/languages/freemius.pot",
        "vendor/freemius/languages/index.php",
        "404-to-301.php",
        "index.php",
        "LICENSE",
        "readme.txt",
        "wpml-config.xml",
      ],
    },

    plugin_dir: "404-to-301/",
    plugin_file: "404-to-301.php",
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Make .pot file for translation.
    makepot: {
      options: {
        domainPath: "languages",
        exclude: ["vendor/.*"],
        mainFile: "404-to-301.php",
        potFilename: "404-to-301.pot",
        potHeaders: {
          poedit: true,
          "language-team": "Joel James <me@joelsays.com>",
          "report-msgid-bugs-to": "https://duckdev.com/products/404-to-301/",
          "last-translator": "Joel James <me@joelsays.com>",
          "x-generator": "grunt-wp-i18n",
        },
        type: "wp-plugin",
        updateTimestamp: false, // Update POT-Creation-Date header if no other changes are detected.
        cwd: "",
      },
      // Make .pot file for the plugin.
      main: {
        options: {
          cwd: "",
        },
      },
      // Make .pot file for the release.
      release: {
        options: {
          cwd: "releases/404-to-301",
        },
      },
    },

    // Make .mo file from .pot file for translation.
    po2mo: {
      // Make .mo file for the plugin.
      main: {
        src: "languages/404-to-301.pot",
        dest: "languages/404-to-301.mo",
      },
      // Make .mo file for the release.
      release: {
        src: "releases/404-to-301/languages/404-to-301.pot",
        dest: "releases/404-to-301/languages/404-to-301.mo",
      },
    },

    // Clean temp folders and release copies.
    clean: {
      temp: {
        src: ["**/*.tmp", "**/.afpDeleted*", "**/.DS_Store"],
        dot: true,
        filter: "isFile",
      },
      folder_v2: ["releases/**"],
    },

    // Verify in text domain is used properly.
    checktextdomain: {
      options: {
        text_domain: "404-to-301",
        keywords: [
          "__:1,2d",
          "_e:1,2d",
          "_x:1,2c,3d",
          "esc_html__:1,2d",
          "esc_html_e:1,2d",
          "esc_html_x:1,2c,3d",
          "esc_attr__:1,2d",
          "esc_attr_e:1,2d",
          "esc_attr_x:1,2c,3d",
          "_ex:1,2c,3d",
          "_n:1,2,4d",
          "_nx:1,2,4c,5d",
          "_n_noop:1,2,3d",
          "_nx_noop:1,2,3c,4d",
        ],
      },
      files: {
        src: ["includes/**/*.php", "404-to-301.php"],
        expand: true,
      },
    },

    // Copy selected folder and files for release.
    copy: {
      files: {
        src: conf.plugin_branches.include_files,
        dest: "releases/<%= pkg.name %>/",
      },
      freemius: {
        expand: true,
        flatten: true,
        src: ".freemius_assets/**",
        dest: "releases/<%= pkg.name %>/vendor/freemius/assets/img/",
        filter: "isFile",
      },
    },

    // Compress release folder with version number.
    compress: {
      files: {
        options: {
          mode: "zip",
          archive: "./releases/<%= pkg.name %>-<%= pkg.version %>.zip",
        },
        expand: true,
        cwd: "releases/<%= pkg.name %>/",
        src: ["**/*"],
        dest: conf.plugin_dir,
      },
    },
  });

  // Check if text domain is used properly.
  grunt.registerTask("prepare", ["checktextdomain"]);

  // Make pot file from files.
  grunt.registerTask("translate", ["makepot:main"]);

  // Run build task to create release copy.
  grunt.registerTask("build", "Run all tasks.", function () {
    grunt.task.run("clean");
    grunt.task.run("translate");
    grunt.task.run("copy:files");
    grunt.task.run("copy:freemius");
    grunt.task.run("makepot:release");
    //grunt.task.run("po2mo:release");
    grunt.task.run("compress");
  });
};
