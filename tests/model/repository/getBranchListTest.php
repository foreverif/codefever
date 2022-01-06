<?php
namespace Repository;

use PHPUnit\Framework\TestCase;

class getBranchListTest extends TestCase {

    public function setUp()
    {
        global $CI;
        $CI->load->model('Repository_model', 'repositoryModel');
    }

    public function test_main()
    {
        global $CI;

        $uKey = TESTING_USER_KEY;
        $rKey = TESTING_REPOSITORY_KEY;

        $result = $CI->repositoryModel->getBranchList($rKey, $uKey);
        $this->assertIsArray($result);
        $this->assertGreaterThanOrEqual(0, count($result));
    }

    public function test_main_empty()
    {
        global $CI;

        $result = $CI->repositoryModel->getBranchList('', '');

        $this->assertIsArray($result);
        $this->assertSame(0, count($result));
    }
}