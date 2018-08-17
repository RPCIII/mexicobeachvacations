<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdc42a9417e6e4d85384c75730d6e71aa
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'KeriganSolutions\\KMAPortfolio\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'KeriganSolutions\\KMAPortfolio\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdc42a9417e6e4d85384c75730d6e71aa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdc42a9417e6e4d85384c75730d6e71aa::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}