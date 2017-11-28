using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class act1_camera : MonoBehaviour {

	// Use this for initialization
	public GameObject player;

	public Vector3 mid;
	public Vector3 offset;
	public Vector3 start;
//	Camera cam;

	// Use this for initialization
	void Start () {
		start = player.transform.position;
//		offsetstart = transform.position - player.transform.position;
//		print (offsetstart);
		mid.x =  5;
		mid.z = 0;
		mid.y = 0;
		offset = transform.position - player.transform.position - mid;
	}

	// Update is called once per frame
	void FixedUpdate()
	{
		if (player.transform.position.x - start.x > 5) {
//			offset.x = 5;

			if (transform.position.x < 7) {
				transform.position = player.transform.position + offset;
			}
		} else if (player.transform.position.x - start.x < 4) {
			//			offset.x = 5;

			if (transform.position.x < -1) {
				transform.position = player.transform.position + offset;
			}
		}

	}
}
